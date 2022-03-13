"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketWorldUpdate = void 0;
var packet_1 = require("./packet");
var PacketWorldUpdate = /** @class */ (function () {
    function PacketWorldUpdate() {
    }
    PacketWorldUpdate.packServer = function (paddleLeftY, paddleRightY, ballPos, ballVel) {
        var packet = packet_1.Packet.create(packet_1.PACKET_ID.WORLD_UPDATE);
        packet.writeFloat32(paddleLeftY);
        packet.writeFloat32(paddleRightY);
        packet.writeVec2(ballPos);
        packet.writeVec2(ballVel);
        return packet.writeData;
    };
    PacketWorldUpdate.unpackClient = function (data) {
        var packet = packet_1.Packet.from(data);
        var paddleLeftY = packet.readFloat32();
        var paddleRightY = packet.readFloat32();
        var ballPos = packet.readVec2();
        var ballVel = packet.readVec2();
        return { paddleLeftY: paddleLeftY, paddleRightY: paddleRightY, ballPos: ballPos, ballVel: ballVel };
    };
    return PacketWorldUpdate;
}());
exports.PacketWorldUpdate = PacketWorldUpdate;
