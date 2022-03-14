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
      if (game.input.mouse.y < game.sandbox.HEIGHT / 2) this.move(PADDLE_INPUT.UP);
      else if (game.input.mouse.y > game.sandbox.HEIGHT / 2) this.move(PADDLE_INPUT.DOWN);
    }
    else {
      if (game.input.getKey(INPUT_KEY.W)) this.move(PADDLE_INPUT.UP);
      else if (game.input.getKey(INPUT_KEY.S)) this.move(PADDLE_INPUT.DOWN);
    }

    // Clamp paddle's y position
    this.pos.y = Maths.clamp(this.pos.y, 0, game.sandbox.HEIGHT - this.size.y);
  }

  private move(paddleInput: PADDLE_INPUT) {
    let moveVec: Vec2;
    switch (paddleInput) {
      case PADDLE_INPUT.UP: moveVec = new Vec2(0, -10); break;
      case PADDLE_INPUT.DOWN: moveVec = new Vec2(0, 10); break;
      default: return;
    }

    this.pos = Maths.towards(this.pos, Vec2.add(this.pos, moveVec), 10);
    game.network.send(PacketPaddleInput.packClient(paddleInput));
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