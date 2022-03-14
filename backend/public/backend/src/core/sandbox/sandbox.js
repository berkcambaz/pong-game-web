"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sandbox = void 0;
var vec2_1 = require("../../../../shared/core/vec2");
var ball_1 = require("./ball");
var paddle_1 = require("./paddle");
var Sandbox = /** @class */ (function () {
    function Sandbox(room) {
        this.WIDTH = 1280;
        this.HEIGHT = 720;
        this.room = room;
        this.running = false;
        this.paddleLeft = new paddle_1.Paddle(this, new vec2_1.Vec2(20, (this.HEIGHT / 2) - (50 / 2)), new vec2_1.Vec2(10, 50));
        this.paddleRight = new paddle_1.Paddle(this, new vec2_1.Vec2(this.WIDTH - 20 - 10, (this.HEIGHT / 2) - (50 / 2)), new vec2_1.Vec2(10, 50));
        this.ball = new ball_1.Ball(this, new vec2_1.Vec2((this.WIDTH / 2) - (10 / 2), (this.HEIGHT / 2) - (10 / 2)), new vec2_1.Vec2(10, 10));
        this.ball.vel = new vec2_1.Vec2(-10, -10);
    }
    Sandbox.prototype.tick = function () {
        if (!this.room.sandbox.running)
            return;
        this.paddleLeft.tick();
        this.paddleRight.tick();
        this.ball.tick();
    };
    Sandbox.prototype.restart = function () {
        //this.paddleLeft.pos = new Vec2(20, (this.HEIGHT / 2) - (50 / 2));
        //this.paddleRight.pos = new Vec2(this.WIDTH - 20 - 10, (this.HEIGHT / 2) - (50 / 2));
        this.ball.pos = new vec2_1.Vec2((this.WIDTH / 2) - (10 / 2), (this.HEIGHT / 2) - (10 / 2));
    };
    return Sandbox;
}());
exports.Sandbox = Sandbox;
