import { game } from "../..";
import { ClientBall } from "./client_ball";
import { ClientPaddle } from "./client_paddle";

export class ClientSandboxHelper {
  public paddleLeft: ClientPaddle;
  public paddleRight: ClientPaddle;
  public ball: ClientBall;

  constructor() {
    this.paddleLeft = new ClientPaddle(game.sandbox.paddleLeft);
    this.paddleRight = new ClientPaddle(game.sandbox.paddleRight);
    this.ball = new ClientBall(game.sandbox.ball);
  }

  public tick() {
    if (!game.sandbox.running) return;

    this.paddleLeft.tick();
    this.paddleRight.tick();
    this.ball.tick();
  }

  public render(dt: number) {
    game.ctx.fillStyle = "#ffffff";

    this.paddleLeft.render(dt);
    this.paddleRight.render(dt);
    this.ball.render(dt);
  }
}