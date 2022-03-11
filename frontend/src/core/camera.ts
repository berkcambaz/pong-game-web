import { game } from "..";

export class Camera {
  public x: number;
  public y: number;
  public w: number;
  public h: number;

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    game.signals.onResize.add((w, h) => { this.onResize(w, h) });
  }

  private onResize(w: number, h: number) {
    // TODO: Handle for different device pixel ratios

    let target = this.w / this.h;
    let current = w / h;

    if (current > target) w = h * (16 / 9);
    else h = w * (9 / 16);

    game.canvas.width = w;
    game.canvas.height = h;
    game.canvas.style.width = w + "px";
    game.canvas.style.height = h + "px";
    game.ctx.setTransform(0.99, 0, 0, 0.99, 0, 0);
  }
}