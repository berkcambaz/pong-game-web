import { Vec2 } from "../core/vec2";

export class Entity {
  public pos: Vec2;
  public size: Vec2;
  public vel: Vec2;

  constructor(pos: Vec2, size: Vec2, vel?: Vec2) {
    this.pos = pos;
    this.size = size;
    this.vel = vel || new Vec2(0, 0);
  }
}