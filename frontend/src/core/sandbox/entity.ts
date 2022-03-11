import { Maths } from "../../../../shared/core/maths";
import { Vec2 } from "../../../../shared/core/vec2";

export class Entity {
  public pos: Vec2;
  public size: Vec2;

  public oldPos: Vec2;

  constructor(pos: Vec2, size: Vec2) {
    this.pos = pos;
    this.size = size;

    this.oldPos = pos;
  }

  public movePos(pos: Vec2) {
    this.oldPos = this.pos.clone();

    this.pos.x += pos.x;
    this.pos.y += pos.y;
  }

  public getX(dt: number) {
    return Maths.interp(this.oldPos.x, this.pos.x, dt);
  }

  public getY(dt: number) {
    return Maths.interp(this.oldPos.y, this.pos.y, dt);
  }

  public tick() { }
  public render(dt: number) { }
}