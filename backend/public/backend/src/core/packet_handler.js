"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketHandler = void 0;
var __1 = require("..");
var vec2_1 = require("../../../shared/core/vec2");
var packet_1 = require("../../../shared/packets/packet");
var packet_connect_1 = require("../../../shared/packets/packet_connect");
var packet_init_1 = require("../../../shared/packets/packet_init");
var packet_paddle_input_1 = require("../../../shared/packets/packet_paddle_input");
var paddle_type_1 = require("../../../shared/paddle_type");
var room_1 = require("./room");
var PacketHandler = /** @class */ (function () {
    function PacketHandler() {
    }
    PacketHandler.handle = function (client, data) {
        var packet = packet_1.Packet.from(data);
        switch (packet.id) {
            case packet_1.PACKET_ID.INIT:
                handlePacketInit(client, data);
                break;
            case packet_1.PACKET_ID.CONNECT:
                handlePacketConnect(client, data);
                break;
            case packet_1.PACKET_ID.PADDLE_INPUT:
                handlePacketPaddleInput(client, data);
                break;
            default: break;
        }
    };
    return PacketHandler;
}());
exports.PacketHandler = PacketHandler;
function handlePacketInit(client, data) {
    var received = packet_init_1.PacketInit.unpackServer(data);
    client.socket.send(packet_init_1.PacketInit.packServer(client.id));
}
function handlePacketConnect(client, data) {
    var received = packet_connect_1.PacketConnect.unpackServer(data);
    if (!__1.server.network.rooms[received.id] && __1.server.network.clients[received.id]) {
        var room = new room_1.Room(received.id);
        __1.server.network.rooms[received.id] = room;
        __1.server.network.clients[received.id].socket.send(packet_connect_1.PacketConnect.packServer(true, paddle_type_1.PADDLE_TYPE.LEFT));
        room.connect(__1.server.network.clients[received.id]);
        if (received.id !== client.id) {
            client.socket.send(packet_connect_1.PacketConnect.packServer(true, paddle_type_1.PADDLE_TYPE.RIGHT));
            room.connect(client);
        }
    }
    else if (__1.server.network.rooms[received.id]) {
        var success = __1.server.network.rooms[received.id].connectable();
        var paddleType = __1.server.network.rooms[received.id].getAvailablePaddleType();
        client.socket.send(packet_connect_1.PacketConnect.packServer(success, paddleType));
        __1.server.network.rooms[received.id].connect(client);
    }
}
function handlePacketPaddleInput(client, data) {
    var received = packet_paddle_input_1.PacketPaddleInput.unpackServer(data);
    var paddle;
    switch (client.paddleType) {
        case paddle_type_1.PADDLE_TYPE.LEFT:
            paddle = __1.server.network.rooms[client.roomId].sandbox.paddleLeft;
            break;
        case paddle_type_1.PADDLE_TYPE.RIGHT:
            paddle = __1.server.network.rooms[client.roomId].sandbox.paddleRight;
            break;
        default: return;
    }
    paddle.moveTo(new vec2_1.Vec2(paddle.pos.x, paddle.pos.y + received.movY));
}
