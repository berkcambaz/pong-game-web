"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketPaddleInput = void 0;
var packet_1 = require("./packet");
var PacketPaddleInput = /** @class */ (function () {
    function PacketPaddleInput() {
    }
    PacketPaddleInput.packClient = function (movY) {
        var packet = packet_1.Packet.create(packet_1.PACKET_ID.PADDLE_INPUT);
        packet.writeFloat32(movY);
        return packet.writeData;
    };
    PacketPaddleInput.unpackServer = function (data) {
        var packet = packet_1.Packet.from(data);
        var movY = packet.readFloat32();
        return { movY: movY };
    };
    return PacketPaddleInput;
}());
exports.PacketPaddleInput = PacketPaddleInput;
