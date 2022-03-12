import { Soda } from "@dorkodu/soda";
import { game } from "../../..";
import { HUD_STATE, INGAME_STATE, MENU_STATE } from "../ui";
import { HUD } from "./Hud";
import { Ingame } from "./Ingame";
import { Menu } from "./Menu";

export function App() {
  const [_, update] = Soda.state(0);
  game.ui.appHandler = update;

  return (
    <div>
      {game.ui.menuState === MENU_STATE.NONE ? "" : <Menu />}
      {game.ui.ingameState === INGAME_STATE.NONE ? "" : <Ingame />}
      {game.ui.hudState === HUD_STATE.NONE ? "" : <HUD />}
    </div>
  )
}