import { Ball } from "./ball";
import { Paddle } from "./paddle";

export class Sandbox {
  public paddleRight: Paddle;
  public paddleLeft: Paddle;
  public ball: Ball;

  constructor() {
    this.paddleRight = new Paddle();
    this.paddleLeft = new Paddle();
    this.ball = new Ball();
  }

  public tick() {

  }
}