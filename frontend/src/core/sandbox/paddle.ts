import { game } from "../..";
import { Vec2 } from "../../../../shared/core/vec2";
import { INPUT_KEY } from "../input";
import { Entity } from "./entity";

export class Paddle extends Entity {
  public controlled: boolean;

  constructor(pos: Vec2, size: Vec2) {
    super(pos, size);

    this.controlled = false;
  }

  public tick(): void {
    if (!this.controlled) return;

    if (game.input.getKey(INPUT_KEY.W)) this.movePos(new Vec2(0, -5));
    if (game.input.getKey(INPUT_KEY.S)) this.movePos(new Vec2(0, 5));
  }

  public render(dt: number): void {
    if (this.controlled)
      console.log(this.getY(dt));

    game.ctx.fillRect(
      this.getX(dt),
      this.getY(dt),
      this.size.x,
      this.size.y
    );
  }
}