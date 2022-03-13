"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maths = void 0;
var vec2_1 = require("./vec2");
var Maths = /** @class */ (function () {
    function Maths() {
    }
    Maths.clamp = function (value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    };
    Maths.interp = function (a, b, amount) {
        return (b - a) * amount + a;
    };
    Maths.towards = function (current, target, amount) {
        var diff = { x: target.x - current.x, y: target.y - current.y };
        var magnitude = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
        if (magnitude <= amount || magnitude === 0)
            return target;
        return new vec2_1.Vec2(current.x + diff.x / magnitude * amount, current.y + diff.y / magnitude * amount);
    };
    return Maths;
}());
exports.Maths = Maths;
