"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
var Random = /** @class */ (function () {
    function Random() {
    }
    Random.number = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    return Random;
}());
exports.Random = Random;
