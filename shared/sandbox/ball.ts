import { Vec2 } from "../core/vec2";
import { Entity } from "./entity";

export class Ball extends Entity {
  public vel: Vec2;

  constructor(pos: Vec2, size: Vec2) {
    super(pos, size);

    this.vel = Vec2.zero();
  }
}