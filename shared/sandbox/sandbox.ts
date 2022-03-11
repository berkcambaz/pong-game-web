import { Vec2 } from "../core/vec2";
import { Ball } from "./ball";
import { Paddle } from "./paddle";

export class Sandbox {
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

  public tick() {

  }
}