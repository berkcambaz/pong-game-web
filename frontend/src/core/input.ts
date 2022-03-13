import { game } from "..";

export enum INPUT_KEY {
  W,
  S,
}

interface KeyToId {
  KeyW: INPUT_KEY;
  KeyS: INPUT_KEY;
}

export class Input {
  public mouse: { x: number, y: number, pressed: boolean };
  private keyToId: KeyToId;
  private keys: boolean[];

  constructor() {
    this.mouse = { x: 0, y: 0, pressed: false };

    this.keyToId = {
      KeyW: INPUT_KEY.W,
      KeyS: INPUT_KEY.S,
    }

    this.keys = [];

    window.addEventListener("keydown", (ev) => { this.onKeyDown(ev) });
    window.addEventListener("keyup", (ev) => { this.onKeyUp(ev) });

    game.canvas.addEventListener("mousemove", (ev) => { this.onMouseMove(ev) })
    game.canvas.addEventListener("mousedown", (ev) => { this.onMouseDown(ev) })
    game.canvas.addEventListener("mouseup", (ev) => { this.onMouseUp(ev) })
    game.canvas.addEventListener("mouseleave", (ev) => { this.onMouseLeave(ev) })

    game.canvas.addEventListener("touchmove", (ev) => { this.onTouchMove(ev) })
    game.canvas.addEventListener("touchstart", (ev) => { this.onTouchStart(ev) })
    game.canvas.addEventListener("touchend", (ev) => { this.onTouchEnd(ev) })
    game.canvas.addEventListener("touchcancel", (ev) => { this.onTouchCancel(ev) })
  }

  public tick() {

  }

  public getKey(key: INPUT_KEY) {
    return !!this.keys[key];
  }

  private onKeyDown(ev: KeyboardEvent) {
    const keyId = this.keyToId[(ev.code as keyof KeyToId)];
    if (keyId !== undefined) {
      this.keys[keyId] = true;
    }
  }

  private onKeyUp(ev: KeyboardEvent) {
    const keyId = this.keyToId[(ev.code as keyof KeyToId)];
    if (keyId !== undefined) {
      this.keys[keyId] = false;
    }
  }

  private onMouseMove(ev: MouseEvent) {
    const bounds = game.canvas.getBoundingClientRect();
    this.mouse.x = game.camera.convertX(ev.pageX - bounds.left - scrollX);
    this.mouse.y = game.camera.convertY(ev.pageY - bounds.top - scrollY);
  }

  private onMouseDown(ev: MouseEvent) {
    this.mouse.pressed = true;

    const bounds = game.canvas.getBoundingClientRect();
    this.mouse.x = game.camera.convertX(ev.pageX - bounds.left - scrollX);
    this.mouse.y = game.camera.convertY(ev.pageY - bounds.top - scrollY);
  }

  private onMouseUp(ev: MouseEvent) {
    this.mouse.pressed = false;
  }

  private onMouseLeave(ev: MouseEvent) {
    this.mouse.pressed = false;
  }

  private onTouchMove(ev: TouchEvent) {
    ev.preventDefault();

    const rect = game.canvas.getBoundingClientRect();
    this.mouse.x = game.camera.convertX(ev.touches[0].clientX - rect.left - scrollX);
    this.mouse.y = game.camera.convertY(ev.touches[0].clientY - rect.top - scrollY);
  }

  private onTouchStart(ev: TouchEvent) {
    ev.preventDefault();

    const rect = game.canvas.getBoundingClientRect();
    this.mouse.x = game.camera.convertX(ev.touches[0].clientX - rect.left - scrollX);
    this.mouse.y = game.camera.convertY(ev.touches[0].clientY - rect.top - scrollY);

    this.mouse.pressed = true;
  }

  private onTouchEnd(ev: TouchEvent) {
    ev.preventDefault();

    this.mouse.pressed = false;
  }

  private onTouchCancel(ev: TouchEvent) {
    ev.preventDefault();

    this.mouse.pressed = false;
  }
}