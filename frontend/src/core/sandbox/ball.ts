import { Vec2 } from "../../../../shared/core/vec2";
import { Entity } from "./entity";

export class Ball extends Entity {
  constructor(pos: Vec2, size: Vec2) {
    super(pos, size);
  }
}