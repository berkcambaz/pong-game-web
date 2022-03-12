import { game } from "../..";
import { Vec2 } from "../../../../shared/core/vec2";
import { Ball } from "./ball";
import { Paddle } from "./paddle";

export class Sandbox {
  public readonly WIDTH = 1280;
  public readonly HEIGHT = 720;

  public running: boolean;

  public paddleLeft: Paddle;
  public paddleRight: Paddle;
  public ball: Ball;

  constructor() {
    this.running = false;

    this.paddleLeft = new Paddle(new Vec2(20, (this.HEIGHT / 2) - (50 / 2)), new Vec2(10, 50));
    this.paddleRight = new Paddle(new Vec2(this.WIDTH - 20 - 10, (this.HEIGHT / 2) - (50 / 2)), new Vec2(10, 50));
    this.ball = new Ball(new Vec2((this.WIDTH / 2) - (10 / 2), (this.HEIGHT / 2) - (10 / 2)), new Vec2(10, 10));
  }

  public tick() {
    if (!game.sandbox.running) return;

    this.paddleLeft.tick();
    this.paddleRight.tick();
    this.ball.tick();
  }

  public render(dt: number) {
    game.ctx.fillStyle = "#ffffff";

    this.paddleLeft.render(dt);
    this.paddleRight.render(dt);
    this.ball.render(dt);
  }
}