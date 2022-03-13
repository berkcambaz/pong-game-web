"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Network = void 0;
var websocket = require("ws");
var paddle_type_1 = require("../../../shared/paddle_type");
var id_1 = require("./id");
var packet_handler_1 = require("./packet_handler");
var Network = /** @class */ (function () {
    function Network(server) {
        var _this = this;
        this.clients = {};
        this.rooms = {};
        this.ws = new websocket.Server({ server: server });
        this.ws.on("connection", function (socket, req) {
            console.log("open");
            // Try to initialize the client
            var client = {
                socket: socket,
                id: (0, id_1.generateClientId)(),
                roomId: "",
                paddleType: paddle_type_1.PADDLE_TYPE.NONE
            };
            if (client.id === "") {
                socket.close();
                return;
            }
            _this.clients[client.id] = client;
            socket.on("message", function (data) {
                //console.log("message");
                packet_handler_1.PacketHandler.handle(client, new Int8Array(data));
            });
            socket.on("close", function (data) {
                console.log("close");
                _this.disconnect(client);
            });
            socket.on("error", function (data) {
                console.log("error");
                _this.disconnect(client);
            });
        });
    }
    Network.prototype.disconnect = function (client) {
        client.socket.close(1000);
        if (this.rooms[client.roomId])
            this.rooms[client.roomId].disconnect(client);
        delete this.clients[client.id];
    };
    return Network;
}());
exports.Network = Network;
