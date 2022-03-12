import { Soda } from "@dorkodu/soda";
import { game } from "../../..";

export function Menu() {
  const [_, update] = Soda.state(0);
  game.ui.menuHandler = update;

  return <div>Hello world</div>
}