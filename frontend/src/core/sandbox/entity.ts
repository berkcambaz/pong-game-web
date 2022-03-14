import { Maths } from "../../../../shared/core/maths";
import { Vec2 } from "../../../../shared/core/vec2";
import { PADDLE_INPUT } from "../../../../shared/paddle_input";

export class Entity {
  public pos: Vec2;
  public size: Vec2;

  public oldPos: Vec2;

  private reconciliation: Vec2[];

  constructor(pos: Vec2, size: Vec2) {
    this.pos = pos;
    this.size = size;

    this.oldPos = pos;

    this.reconciliation = [];
  }

  tick() {
    this.oldPos = this.pos.clone();
  }

  public pushRecon(pos: Vec2) {
    this.reconciliation.push(pos);
  }

  public popRecon(pos: Vec2) {
    const limit = 30;
    const length = Math.min(limit, this.reconciliation.length);

    let index = 0;
    let wrong = 0;

    for (index = 0; index < length; ++index) {
      if (!Vec2.equals(this.reconciliation[index], pos)) ++wrong;
    }

    // If client prediction is wrong
    if (wrong !== 0 && wrong === length) {
      this.pos = pos;
    }

    if (index > 0 && this.reconciliation.length > 30) {
      if (index > 4) index = 4;
      this.reconciliation.splice(0, index - 1);
    }
  }

  public getX(dt: number) {
    return Maths.interp(this.oldPos.x, this.pos.x, dt);
  }

  public getY(dt: number) {
    return Maths.interp(this.oldPos.y, this.pos.y, dt);
  }
}