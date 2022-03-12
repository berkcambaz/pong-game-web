import { Soda } from "@dorkodu/soda";
import { game } from "../../..";

export function HUD() {
  const [_, update] = Soda.state(0);
  game.ui.hudHandler = update;

  return <div>Hello world</div>
}