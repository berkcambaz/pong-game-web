import { Soda } from "@dorkodu/soda";
import { game } from "../../..";
import { PacketConnect } from "../../../../../shared/packets/packet_connect";

export function Menu() {
  const [_, update] = Soda.state(0);
  game.ui.menuHandler = update;

  const inputId = Soda.ref();

  const join = () => {
    const id = inputId.dom.value;
    if (id.length === 5) game.network.send(PacketConnect.packClient(id));
  }

  return (
    <div class="ui-menu">
      <div class="title">Pong Online</div>
      <div class="section">
        <input ref={inputId} type="text" placeholder="Enter id..." />
        <button onclick={join}>Join</button>
        <div class="id">
          Your id: {game.network.id}
        </div>
      </div>
    </div>
  )
}