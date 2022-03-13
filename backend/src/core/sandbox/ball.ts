import { Physics } from "../../../../shared/core/physics";
import { Vec2 } from "../../../../shared/core/vec2";
import { Entity } from "./entity";
import { Sandbox } from "./sandbox";

export class Ball extends Entity {
  public sandbox: Sandbox;

  public vel: Vec2;

  constructor(sandbox: Sandbox, pos: Vec2, size: Vec2) {
    super(pos, size);

    this.sandbox = sandbox;

    this.vel = Vec2.zero();
  }

  public tick() {
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
    if (Physics.box_box(this.sandbox.paddleLeft.pos, this.sandbox.paddleLeft.size, this.pos, this.size)) {
      this.vel.x = -this.vel.x;
    }
    else if (Physics.box_box(this.sandbox.paddleRight.pos, this.sandbox.paddleRight.size, this.pos, this.size)) {
      this.vel.x = -this.vel.x;
    }
  }
}