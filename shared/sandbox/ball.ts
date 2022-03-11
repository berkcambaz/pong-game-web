import { Vec2 } from "../core/vec2";
import { Entity } from "./entity";

export class Ball {
  public entity: Entity;

  constructor(pos: Vec2, size: Vec2) {
    this.entity = new Entity(pos, size);
  }
}