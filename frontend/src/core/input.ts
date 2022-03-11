export enum INPUT_KEY {
  W,
  S,
}

interface KeyToId {
  KeyW: INPUT_KEY;
  KeyS: INPUT_KEY;
}

export class Input {
  private keyToId: KeyToId;
  private keys: boolean[];

  constructor() {
    this.keyToId = {
      KeyW: INPUT_KEY.W,
      KeyS: INPUT_KEY.S,
    }

    this.keys = [];

    window.addEventListener("keydown", (ev) => { this.onKeyDown(ev) });
    window.addEventListener("keyup", (ev) => { this.onKeyUp(ev) });
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
}