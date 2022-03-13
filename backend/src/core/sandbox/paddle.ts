import { Maths } from "../../../../shared/core/maths";
import { Vec2 } from "../../../../shared/core/vec2";
import { Entity } from "./entity";
import { Sandbox } from "./sandbox";

export class Paddle extends Entity {
  public sandbox: Sandbox;

  constructor(sandbox: Sandbox, pos: Vec2, size: Vec2) {
    super(pos, size);

    this.sandbox = sandbox;
  }

  public tick() {
    // Clamp paddle's y position
    this.pos.y = Maths.clamp(this.pos.y, 0, this.sandbox.HEIGHT - this.size.y);
  }
}