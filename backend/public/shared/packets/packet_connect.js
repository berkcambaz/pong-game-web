"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketConnect = void 0;
var packet_1 = require("./packet");
var PacketConnect = /** @class */ (function () {
    function PacketConnect() {
    }
    PacketConnect.packClient = function (id) {
        var packet = packet_1.Packet.create(packet_1.PACKET_ID.CONNECT);
        packet.writeString(id);
        return packet.writeData;
    };
    PacketConnect.unpackServer = function (data) {
        var packet = packet_1.Packet.from(data);
        var id = packet.readString(5);
        return { id: id };
    };
    PacketConnect.packServer = function (success, paddleType) {
        var packet = packet_1.Packet.create(packet_1.PACKET_ID.CONNECT);
        packet.writeBool(success);
        packet.writeInt8(paddleType);
        return packet.writeData;
    };
    PacketConnect.unpackClient = function (data) {
        var packet = packet_1.Packet.from(data);
        var success = packet.readBool();
        var paddleType = packet.readInt8();
        return { success: success, paddleType: paddleType };
    };
    return PacketConnect;
}());
exports.PacketConnect = PacketConnect;
