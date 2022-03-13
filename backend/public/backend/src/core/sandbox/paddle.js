"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paddle = void 0;
var maths_1 = require("../../../../shared/core/maths");
var entity_1 = require("./entity");
var Paddle = /** @class */ (function (_super) {
    __extends(Paddle, _super);
    function Paddle(sandbox, pos, size) {
        var _this = _super.call(this, pos, size) || this;
        _this.sandbox = sandbox;
        return _this;
    }
    Paddle.prototype.tick = function () {
        // Clamp paddle's y position
        this.pos.y = maths_1.Maths.clamp(this.pos.y, 0, this.sandbox.HEIGHT - this.size.y);
    };
    Paddle.prototype.moveTo = function (pos) {
        this.pos = maths_1.Maths.towards(this.pos, pos, 10);
    };
    return Paddle;
}(entity_1.Entity));
exports.Paddle = Paddle;
