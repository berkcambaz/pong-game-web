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

  }
}