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
exports.Ball = void 0;
var physics_1 = require("../../../../shared/core/physics");
var vec2_1 = require("../../../../shared/core/vec2");
var entity_1 = require("./entity");
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball(sandbox, pos, size) {
        var _this = _super.call(this, pos, size) || this;
        _this.sandbox = sandbox;
        _this.vel = vec2_1.Vec2.zero();
        return _this;
    }
    Ball.prototype.tick = function () {
        // Apply velocity
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        // Clamp ball x position
        if (this.pos.x < 0) {
            // TODO: Right paddle win
            this.sandbox.restart();
        }
        else if (this.pos.x > this.sandbox.WIDTH - this.size.x) {
            // TODO: Left paddle win
            this.sandbox.restart();
        }
        // Clamp ball y position
        if (this.pos.y < 0) {
            this.vel.y = -this.vel.y;
            this.pos.y = 0;
        }
        else if (this.pos.y > this.sandbox.HEIGHT - this.size.y) {
            this.vel.y = -this.vel.y;
            this.pos.y = this.sandbox.HEIGHT - this.size.y;
        }
        // Handle paddle-ball collision
        if (physics_1.Physics.box_box(this.sandbox.paddleLeft.pos, this.sandbox.paddleLeft.size, this.pos, this.size)) {
            this.vel.x = -this.vel.x;
        }
        else if (physics_1.Physics.box_box(this.sandbox.paddleRight.pos, this.sandbox.paddleRight.size, this.pos, this.size)) {
            this.vel.x = -this.vel.x;
        }
    };
    return Ball;
}(entity_1.Entity));
exports.Ball = Ball;
