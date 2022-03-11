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
}