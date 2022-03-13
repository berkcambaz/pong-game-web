"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketPaddleInput = void 0;
var packet_1 = require("./packet");
var PacketPaddleInput = /** @class */ (function () {
    function PacketPaddleInput() {
    }
    PacketPaddleInput.packClient = function (posY) {
        var packet = packet_1.Packet.create(packet_1.PACKET_ID.PADDLE_INPUT);
        packet.writeFloat32(posY);
        return packet.writeData;
    };
    PacketPaddleInput.unpackServer = function (data) {
        var packet = packet_1.Packet.from(data);
        var posY = packet.readFloat32();
        return { posY: posY };
    };
    return PacketPaddleInput;
}());
exports.PacketPaddleInput = PacketPaddleInput;
