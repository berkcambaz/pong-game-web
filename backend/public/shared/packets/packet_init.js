"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketInit = void 0;
var packet_1 = require("./packet");
var PacketInit = /** @class */ (function () {
    function PacketInit() {
    }
    PacketInit.packClient = function () {
        var packet = packet_1.Packet.create(packet_1.PACKET_ID.INIT);
        return packet.writeData;
    };
    PacketInit.unpackServer = function (data) {
        var packet = packet_1.Packet.from(data);
        return {};
    };
    PacketInit.packServer = function (id) {
        var packet = packet_1.Packet.create(packet_1.PACKET_ID.INIT);
        packet.writeString(id);
        return packet.writeData;
    };
    PacketInit.unpackClient = function (data) {
        var packet = packet_1.Packet.from(data);
        var id = packet.readString(5);
        return { id: id };
    };
    return PacketInit;
}());
exports.PacketInit = PacketInit;
