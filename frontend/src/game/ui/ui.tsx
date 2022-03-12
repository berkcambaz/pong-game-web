import { Soda } from "@dorkodu/soda";
import { App } from "./components/App";

export enum MENU_STATE {
  NONE = -1,
  MAIN
}

export enum INGAME_STATE {
  NONE = -1,
  MAIN
}

export enum HUD_STATE {
  NONE = -1,
  MAIN
}

export class UI {
  public menuState: MENU_STATE;
  public ingameState: INGAME_STATE;
  public hudState: HUD_STATE;

  public menuHandler!: () => any;
  public ingameHandler!: () => any;
  public hudHandler!: () => any;
  public appHandler!: () => any;

  constructor() {
    this.menuState = MENU_STATE.MAIN;
    this.ingameState = INGAME_STATE.NONE;
    this.hudState = HUD_STATE.NONE;
  }

  public init() {
    Soda.render(<App />, document.body);
  }
}