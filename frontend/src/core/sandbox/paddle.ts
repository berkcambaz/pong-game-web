import { game } from "../..";
import { Maths } from "../../../../shared/core/maths";
import { Vec2 } from "../../../../shared/core/vec2";
import { PacketPaddleInput } from "../../../../shared/packets/packet_paddle_input";
import { PADDLE_INPUT } from "../../../../shared/paddle_input";
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

    if (game.input.mouse.pressed) {
      if (game.input.mouse.y < this.pos.y) this.moveUp();
      else if (game.input.mouse.y > this.pos.y) this.moveDown();
    }
    else {
      if (game.input.getKey(INPUT_KEY.W)) this.moveUp();
      else if (game.input.getKey(INPUT_KEY.S)) this.moveDown();
    }

    // Clamp paddle's y position
    this.pos.y = Maths.clamp(this.pos.y, 0, game.sandbox.HEIGHT - this.size.y);
  }

  private moveUp() {
    game.network.send(PacketPaddleInput.packClient(PADDLE_INPUT.UP));
    this.pos.y += -10;
  }

  private moveDown() {
    game.network.send(PacketPaddleInput.packClient(PADDLE_INPUT.DOWN));
    this.pos.y += +10;
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