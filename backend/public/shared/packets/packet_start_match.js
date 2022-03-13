"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketStartMatch = void 0;
var packet_1 = require("./packet");
var PacketStartMatch = /** @class */ (function () {
    function PacketStartMatch() {
    }
    PacketStartMatch.packServer = function () {
        var packet = packet_1.Packet.create(packet_1.PACKET_ID.START_MATCH);
        return packet.writeData;
    };
    PacketStartMatch.unpackClient = function (data) {
        var packet = packet_1.Packet.from(data);
        return {};
    };
    return PacketStartMatch;
}());
exports.PacketStartMatch = PacketStartMatch;
