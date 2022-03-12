import { Maths } from "../core/maths";
import { Vec2 } from "../core/vec2";
import { Ball } from "./ball";
import { Paddle } from "./paddle";

export class Sandbox {
  public readonly WIDTH = 1280;
  public readonly HEIGHT = 720;

  public paddleLeft: Paddle;
  public paddleRight: Paddle;
  public ball: Ball;

  constructor() {
    this.paddleLeft = new Paddle(new Vec2(20, (this.HEIGHT / 2) - (50 / 2)), new Vec2(10, 50));
    this.paddleRight = new Paddle(new Vec2(this.WIDTH - 20, (this.HEIGHT / 2) - (50 / 2)), new Vec2(10, 50));
    this.ball = new Ball(new Vec2((this.WIDTH / 2) - (10 / 2), (this.HEIGHT / 2) - (10 / 2)), new Vec2(10, 10));
  }

  public tick() {
    // Set new positions
    this.paddleLeft.pos = this.paddleLeft.newPos;
    this.paddleRight.pos = this.paddleRight.newPos;
    this.ball.pos = this.ball.newPos;

    // Clamp paddle positions
    this.paddleLeft.pos.y = Maths.clamp(this.paddleLeft.pos.y, 0, this.HEIGHT - this.paddleLeft.size.y)
    this.paddleRight.pos.y = Maths.clamp(this.paddleRight.pos.y, 0, this.HEIGHT - this.paddleRight.size.y)
  }
}