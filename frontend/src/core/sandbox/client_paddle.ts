import { game } from "../..";
import { Vec2 } from "../../../../shared/core/vec2";
import { Paddle } from "../../../../shared/sandbox/paddle";
import { INPUT_KEY } from "../input";
import { ClientEntity } from "./client_entity";

export class ClientPaddle extends ClientEntity {
  public original: Paddle;
  public isControlled: boolean;

  constructor(original: Paddle, isControlled: boolean) {
    super(original);

    this.original = original;
    this.isControlled = isControlled;
  }

  public tick() {
    if (!this.isControlled) return;

    const pos = this.original.pos.clone();
    this.oldPos = this.original.pos.clone();

    if (game.input.getKey(INPUT_KEY.W)) pos.y += -10;
    if (game.input.getKey(INPUT_KEY.S)) pos.y += +10;

    this.original.newPos = pos;
  }

  public render(dt: number) {
    game.ctx.fillRect(
      this.getX(dt),
      this.getY(dt),
      this.original.size.x,
      this.original.size.y
    );
  }
}