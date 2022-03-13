"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
var __1 = require("..");
var packet_start_match_1 = require("../../../shared/packets/packet_start_match");
var packet_world_update_1 = require("../../../shared/packets/packet_world_update");
var paddle_type_1 = require("../../../shared/paddle_type");
var sandbox_1 = require("./sandbox/sandbox");
var Room = /** @class */ (function () {
    function Room(id) {
        this.tps = 1000 / 10;
        this.currentTime = 0;
        this.accumulator = 0;
        this.id = id;
        this.clients = [];
        this.sandbox = new sandbox_1.Sandbox(this);
    }
    Room.prototype.connectable = function () {
        return this.clients.length < 2;
    };
    Room.prototype.getAvailablePaddleType = function () {
        if (!this.connectable())
            return paddle_type_1.PADDLE_TYPE.NONE;
        if (this.clients.length === 0)
            return paddle_type_1.PADDLE_TYPE.LEFT;
        else
            return this.clients[0].paddleType === paddle_type_1.PADDLE_TYPE.LEFT ? paddle_type_1.PADDLE_TYPE.RIGHT : paddle_type_1.PADDLE_TYPE.LEFT;
    };
    Room.prototype.connect = function (client) {
        if (!this.connectable())
            return;
        client.roomId = this.id;
        client.paddleType = this.getAvailablePaddleType();
        this.clients.push(client);
        if (this.clients.length === 2)
            this.start();
    };
    Room.prototype.disconnect = function (client) {
        var id = this.clients.findIndex(function (value) { return value.id === client.id; });
        if (id !== -1) {
            this.clients.splice(id, 1);
            this.sandbox.running = false;
            if (this.clients.length === 0)
                delete __1.server.network.rooms[this.id];
        }
    };
    Room.prototype.start = function () {
        var _this = this;
        for (var i = 0; i < this.clients.length; ++i) {
            this.clients[i].socket.send(packet_start_match_1.PacketStartMatch.packServer());
        }
        this.currentTime = performance.now();
        this.sandbox.running = true;
        setImmediate(function () { _this.loop(); });
    };
    Room.prototype.stop = function () {
        this.sandbox.running = false;
    };
    Room.prototype.loop = function () {
        var _this = this;
        var newTime = performance.now();
        var frameTime = newTime - this.currentTime;
        if (frameTime > this.tps)
            frameTime = this.tps;
        this.currentTime = newTime;
        this.accumulator += frameTime;
        while (this.accumulator >= this.tps) {
            this.tick();
            this.accumulator -= this.tps;
        }
        if (this.sandbox.running)
            setTimeout(function () { _this.loop(); }, 10);
    };
    Room.prototype.tick = function () {
        for (var i = 0; i < 3; ++i) {
            this.sandbox.tick();
        }
        // Send world update packet to clients
        for (var i = 0; i < this.clients.length; ++i) {
            this.clients[i].socket.send(packet_world_update_1.PacketWorldUpdate.packServer(this.sandbox.paddleLeft.pos.y, this.sandbox.paddleRight.pos.y, this.sandbox.ball.pos, this.sandbox.ball.vel));
        }
    };
    return Room;
}());
exports.Room = Room;
