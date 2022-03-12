import { game } from "../..";
import { Physics } from "../../../../shared/core/physics";
import { Vec2 } from "../../../../shared/core/vec2";
import { Entity } from "./entity";

export class Ball extends Entity {
  public vel: Vec2;

  constructor(pos: Vec2, size: Vec2) {
    super(pos, size);

    this.vel = Vec2.zero();
  }

  public tick() {
    super.tick();

    // Apply velocity
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    // Clamp ball x position
    if (this.pos.x < 0) {
      // TODO: Right paddle win
      this.vel.x = -this.vel.x;
      this.pos.x = 0;
    }
    else if (this.pos.x > game.sandbox.WIDTH - this.size.x) {
      // TODO: Left paddle win
      this.vel.x = -this.vel.x;
      this.pos.x = game.sandbox.WIDTH - this.size.x;
    }

    // Clamp ball y position
    if (this.pos.y < 0) {
      this.vel.y = -this.vel.y;
      this.pos.y = 0;
    }
    else if (this.pos.y > game.sandbox.HEIGHT - this.size.y) {
      this.vel.y = -this.vel.y;
      this.pos.y = game.sandbox.HEIGHT - this.size.y;
    }

    // Handle paddle-ball collision
    if (Physics.box_box(game.sandbox.paddleLeft.pos, game.sandbox.paddleLeft.size, this.pos, this.size)) {
      this.vel.x = -this.vel.x;
    }
    else if (Physics.box_box(game.sandbox.paddleRight.pos, game.sandbox.paddleRight.size, this.pos, this.size)) {
      this.vel.x = -this.vel.x;
    }
  }

  public render(dt: number) {
    game.ctx.fillRect(
      this.getX(dt),
      this.getY(dt),
      this.size.x,
      this.size.y
    );
  }
}