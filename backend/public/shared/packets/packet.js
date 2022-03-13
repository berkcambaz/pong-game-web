"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Packet = exports.PACKET_ID = void 0;
var vec2_1 = require("../core/vec2");
var PACKET_ID;
(function (PACKET_ID) {
    PACKET_ID[PACKET_ID["NONE"] = -1] = "NONE";
    PACKET_ID[PACKET_ID["INIT"] = 0] = "INIT";
    PACKET_ID[PACKET_ID["CONNECT"] = 1] = "CONNECT";
    PACKET_ID[PACKET_ID["DISCONNECT"] = 2] = "DISCONNECT";
    PACKET_ID[PACKET_ID["PADDLE_INPUT"] = 3] = "PADDLE_INPUT";
    PACKET_ID[PACKET_ID["WORLD_UPDATE"] = 4] = "WORLD_UPDATE";
    PACKET_ID[PACKET_ID["SCORE_UPDATE"] = 5] = "SCORE_UPDATE";
    PACKET_ID[PACKET_ID["START_MATCH"] = 6] = "START_MATCH";
})(PACKET_ID = exports.PACKET_ID || (exports.PACKET_ID = {}));
var Packet = /** @class */ (function () {
    function Packet() {
        this.writeData = new Int8Array(0);
        this.readData = new Int8Array(0);
        this.pos = 0;
        this.id = PACKET_ID.NONE;
    }
    Packet.from = function (data) {
        var packet = new Packet();
        packet.readData = new Int8Array(data);
        packet.id = packet.readInt8();
        return packet;
    };
    Packet.create = function (id) {
        var packet = new Packet();
        packet.writeInt8(id);
        packet.id = id;
        return packet;
    };
    Packet.prototype.writeInt8 = function (value) {
        this.writeData = new Int8Array(__spreadArray(__spreadArray([], __read(this.writeData), false), [value], false));
    };
    Packet.prototype.writeInt16 = function (value) {
        var converted = new Int8Array(new Int16Array([value]).buffer);
        this.writeData = new Int8Array(__spreadArray(__spreadArray([], __read(this.writeData), false), __read(converted), false));
    };
    Packet.prototype.writeInt32 = function (value) {
        var converted = new Int8Array(new Int32Array([value]).buffer);
        this.writeData = new Int8Array(__spreadArray(__spreadArray([], __read(this.writeData), false), __read(converted), false));
    };
    Packet.prototype.writeFloat32 = function (value) {
        var converted = new Int8Array(new Float32Array([value]).buffer);
        this.writeData = new Int8Array(__spreadArray(__spreadArray([], __read(this.writeData), false), __read(converted), false));
    };
    Packet.prototype.writeBool = function (value) {
        this.writeData = new Int8Array(__spreadArray(__spreadArray([], __read(this.writeData), false), [value ? 1 : 0], false));
    };
    Packet.prototype.writeString = function (value) {
        var charCodes = [];
        for (var i = 0; i < value.length; ++i)
            charCodes.push(value.charCodeAt(i));
        this.writeData = new Int8Array(__spreadArray(__spreadArray([], __read(this.writeData), false), __read(new Int8Array(new Int32Array(charCodes).buffer)), false));
    };
    Packet.prototype.writeVec2 = function (value) {
        this.writeFloat32(value.x);
        this.writeFloat32(value.y);
    };
    Packet.prototype.readInt8 = function () {
        var int8 = this.readData[this.pos];
        this.pos += 1;
        return int8;
    };
    Packet.prototype.readInt16 = function () {
        var int16 = new Int16Array(new Int8Array(__spreadArray([], __read(this.readData.subarray(this.pos, this.pos + 2)), false)).buffer)[0];
        this.pos += 2;
        return int16;
    };
    Packet.prototype.readInt32 = function () {
        var int32 = new Int32Array(new Int8Array(__spreadArray([], __read(this.readData.subarray(this.pos, this.pos + 4)), false)).buffer)[0];
        this.pos += 4;
        return int32;
    };
    Packet.prototype.readFloat32 = function () {
        var float32 = new Float32Array(new Int8Array(__spreadArray([], __read(this.readData.subarray(this.pos, this.pos + 4)), false)).buffer)[0];
        this.pos += 4;
        return float32;
    };
    Packet.prototype.readBool = function () {
        var bool = this.readData[this.pos];
        this.pos += 1;
        return !!bool;
    };
    Packet.prototype.readString = function (length) {
        var charCodes = new Int32Array(new Int8Array(__spreadArray([], __read(this.readData.subarray(this.pos, this.pos + length * 4)), false)).buffer);
        this.pos += length * 4;
        return String.fromCharCode.apply(String, __spreadArray([], __read(charCodes), false));
    };
    Packet.prototype.readVec2 = function () {
        return new vec2_1.Vec2(this.readFloat32(), this.readFloat32());
    };
    return Packet;
}());
exports.Packet = Packet;
