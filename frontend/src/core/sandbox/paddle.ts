import { game } from "../..";
import { Maths } from "../../../../shared/core/maths";
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

    // Clamp paddle's y position
    this.pos.y = Maths.clamp(this.pos.y, 0, game.sandbox.HEIGHT - this.size.y);
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