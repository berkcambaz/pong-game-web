import { game } from "../..";
import { Vec2 } from "../../../../shared/core/vec2";
import { INPUT_KEY } from "../input";
import { Entity } from "./entity";

export class Paddle extends Entity {
  public isControlled: boolean;

  constructor(pos: Vec2, size: Vec2) {
    super(pos, size);

    this.isControlled = false;
  }

  public tick() {
    super.tick();

    if (!this.isControlled) return;

    if (game.input.getKey(INPUT_KEY.W)) this.pos.y += -10;
    if (game.input.getKey(INPUT_KEY.S)) this.pos.y += +10;
  }

  public render(dt: number) {
    game.ctx.fillRect(
      this.getX(dt),
      this.getY(dt),
      this.size.x,
      this.size.y
    );
  }
}