import { game } from "../..";
import { Vec2 } from "../../../../shared/core/vec2";
import { Paddle } from "../../../../shared/sandbox/paddle";
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