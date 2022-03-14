"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketPaddleInput = void 0;
var packet_1 = require("./packet");
var PacketPaddleInput = /** @class */ (function () {
    function PacketPaddleInput() {
    }
    PacketPaddleInput.packClient = function (paddleInput) {
        var packet = packet_1.Packet.create(packet_1.PACKET_ID.PADDLE_INPUT);
        packet.writeInt8(paddleInput);
        return packet.writeData;
    };
    PacketPaddleInput.unpackServer = function (data) {
        var packet = packet_1.Packet.from(data);
        var paddleInput = packet.readInt8();
        return { paddleInput: paddleInput };
    };
    return PacketPaddleInput;
}());
exports.PacketPaddleInput = PacketPaddleInput;
