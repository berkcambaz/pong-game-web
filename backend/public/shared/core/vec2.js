"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec2 = void 0;
var Vec2 = /** @class */ (function () {
    function Vec2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vec2.prototype.clone = function () {
        return new Vec2(this.x, this.y);
    };
    Vec2.add = function (a, b) {
        return new Vec2(a.x + b.x, a.y + b.y);
    };
    Vec2.equals = function (a, b) {
        return a.x === b.x && a.y === b.y;
    };
    Vec2.zero = function () {
        return new Vec2(0, 0);
    };
    Vec2.one = function () {
        return new Vec2(1, 1);
    };
    return Vec2;
}());
exports.Vec2 = Vec2;
