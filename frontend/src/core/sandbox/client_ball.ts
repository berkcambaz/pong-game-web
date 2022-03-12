import { game } from "../..";
import { Vec2 } from "../../../../shared/core/vec2";
import { Ball } from "../../../../shared/sandbox/ball";
import { ClientEntity } from "./client_entity";

export class ClientBall extends ClientEntity {
  public original: Ball;

  constructor(original: Ball) {
    super(original);

    this.original = original;
  }

  public tick() {
    this.oldPos = this.original.pos.clone();
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