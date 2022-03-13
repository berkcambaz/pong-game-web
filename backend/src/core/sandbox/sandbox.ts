import { Vec2 } from "../../../../shared/core/vec2";
import { Room } from "../room";
import { Ball } from "./ball";
import { Paddle } from "./paddle";

export class Sandbox {
  public readonly WIDTH = 1280;
  public readonly HEIGHT = 720;

  public room: Room;

  public running: boolean;

  public paddleLeft: Paddle;
  public paddleRight: Paddle;
  public ball: Ball;

  constructor(room: Room) {
    this.room = room;

    this.running = false;

    this.paddleLeft = new Paddle(this, new Vec2(20, (this.HEIGHT / 2) - (50 / 2)), new Vec2(10, 50));
    this.paddleRight = new Paddle(this, new Vec2(this.WIDTH - 20 - 10, (this.HEIGHT / 2) - (50 / 2)), new Vec2(10, 50));
    this.ball = new Ball(this, new Vec2((this.WIDTH / 2) - (10 / 2), (this.HEIGHT / 2) - (10 / 2)), new Vec2(10, 10));

    this.ball.vel = new Vec2(-10, -10);
  }

  public tick() {
    if (!this.room.sandbox.running) return;

    this.paddleLeft.tick();
    this.paddleRight.tick();
    this.ball.tick();
  }

  public restart() {
    this.paddleLeft.pos = new Vec2(20, (this.HEIGHT / 2) - (50 / 2));
    this.paddleRight.pos = new Vec2(this.WIDTH - 20 - 10, (this.HEIGHT / 2) - (50 / 2));
    this.ball.pos = new Vec2((this.WIDTH / 2) - (10 / 2), (this.HEIGHT / 2) - (10 / 2));
  }
}