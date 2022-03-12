import { Soda } from "@dorkodu/soda";
import { game } from "../../..";

export function Menu() {
  const [_, update] = Soda.state(0);
  game.ui.menuHandler = update;

  return (
    <div class="ui-menu">
      <div class="title">Pong Online</div>
      <div class="section">
        <input type="text" placeholder="Enter id..." />
        <button>Join</button>
        <div class="id">
          Your id: AAAAA
        </div>
      </div>
    </div>
  )
}