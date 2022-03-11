import { game } from "../..";
import { Vec2 } from "../../../../shared/core/vec2";
import { Entity } from "./entity";

export class Ball extends Entity {
  constructor(pos: Vec2, size: Vec2) {
    super(pos, size);
  }

  public tick(): void {

  }

  public render(dt: number): void {
    game.ctx.fillRect(
      this.getX(dt),
      this.getY(dt),
      this.size.x,
      this.size.y
    );
  }
}