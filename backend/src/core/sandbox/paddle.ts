import { Maths } from "../../../../shared/core/maths";
import { Vec2 } from "../../../../shared/core/vec2";
import { PADDLE_INPUT } from "../../../../shared/paddle_input";
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

  public move(paddleInput: PADDLE_INPUT) {
    let moveVec: Vec2;
    switch (paddleInput) {
      case PADDLE_INPUT.UP: moveVec = new Vec2(0, -10); break;
      case PADDLE_INPUT.DOWN: moveVec = new Vec2(0, 10); break;
      default: return;
    }

    this.pos = Maths.towards(this.pos, Vec2.add(this.pos, moveVec), 10);
  }
}