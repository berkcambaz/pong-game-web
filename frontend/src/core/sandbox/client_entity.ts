import { Maths } from "../../../../shared/core/maths";
import { Vec2 } from "../../../../shared/core/vec2";
import { Entity } from "../../../../shared/sandbox/entity";

export class ClientEntity {
  public original: Entity;
  public oldPos: Vec2;

  constructor(original: Entity) {
    this.original = original;
    this.oldPos = original.pos;
  }

  public getX(dt: number) {
    return Maths.interp(this.oldPos.x, this.original.pos.x, dt);
  }

  public getY(dt: number) {
    return Maths.interp(this.oldPos.y, this.original.pos.y, dt);
  }
}