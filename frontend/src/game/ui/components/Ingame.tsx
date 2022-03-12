import { Soda } from "@dorkodu/soda";
import { game } from "../../..";

export function Ingame() {
  const [_, update] = Soda.state(0);
  game.ui.ingameHandler = update;

  return <div>Hello world</div>
}