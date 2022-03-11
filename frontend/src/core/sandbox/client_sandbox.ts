import { Vec2 } from "../../../../shared/core/vec2";
import { Ball } from "../../../../shared/sandbox/ball";
import { Paddle } from "../../../../shared/sandbox/paddle";
import { Sandbox } from "../../../../shared/sandbox/sandbox";
import { ClientBall } from "./client_ball";

export class ClientSandbox implements Sandbox {
  public readonly WIDTH = 1280;
  public readonly HEIGHT = 720;
  public paddleRight: Paddle;
  public paddleLeft: Paddle;
  public ball: Ball;

  constructor() {
    this.paddleRight = new Paddle(new Vec2(0, 0), new Vec2(10, 50));
    this.paddleLeft = new Paddle(new Vec2(0, 0), new Vec2(10, 50));
    this.ball = new Ball(new Vec2(0, 0), new Vec2(10, 10));
  }

  public tick(): void {

  }

  public render(dt: number) {

  }
}