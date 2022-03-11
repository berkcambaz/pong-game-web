import { game } from "../..";
import { Vec2 } from "../../../../shared/core/vec2";
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

  }

  public render(dt: number) {
    game.ctx.fillStyle = "#ffffff";

    game.ctx.fillRect(
      this.paddleLeft.pos.x,
      this.paddleLeft.pos.y,
      this.paddleLeft.size.x,
      this.paddleLeft.size.y
    );

    game.ctx.fillRect(
      this.paddleRight.pos.x,
      this.paddleRight.pos.y,
      this.paddleRight.size.x,
      this.paddleRight.size.y
    );

    game.ctx.fillRect(
      this.ball.pos.x,
      this.ball.pos.y,
      this.ball.size.x,
      this.ball.size.y
    );
  }
}