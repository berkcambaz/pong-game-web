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

  }
}