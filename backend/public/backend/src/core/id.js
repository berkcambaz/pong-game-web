"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRoomId = exports.generateClientId = exports.generateId = void 0;
var __1 = require("..");
function generateId(length) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var id = "";
    for (var i = 0; i < length; ++i) {
        var index = Math.floor(Math.random() * characters.length);
        id += characters[index];
    }
    return id;
}
exports.generateId = generateId;
function generateClientId() {
    for (var i = 0; i < 5; ++i) {
        var id = generateId(5);
        if (!__1.server.network.clients[id])
            return id;
    }
    return "";
}
exports.generateClientId = generateClientId;
function generateRoomId() {
    // TODO: Implement
}
exports.generateRoomId = generateRoomId;
