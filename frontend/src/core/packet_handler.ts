import { game } from "..";
import { Packet, PACKET_ID } from "../../../shared/packets/packet";
import { PacketConnect } from "../../../shared/packets/packet_connect";
import { PacketInit } from "../../../shared/packets/packet_init";
import { PacketStartMatch } from "../../../shared/packets/packet_start_match";
import { MENU_STATE } from "../game/ui/ui";

export class PacketHandler {
  public static handle(data: Int8Array) {
    const packet = Packet.from(data);
    console.log(packet);

    switch (packet.id) {
      case PACKET_ID.INIT: handlePacketInit(data); break;
      case PACKET_ID.CONNECT: handlePacketConnect(data); break;
      case PACKET_ID.START_MATCH: handlePacketStartMatch(data); break;
      default: break;
    }
  }
}

function handlePacketInit(data: Int8Array) {
  const received = PacketInit.unpackClient(data);

  // Set the id & update the menu
  game.network.id = received.id;
  game.ui.menuHandler();
}

function handlePacketConnect(data: Int8Array) {
  const received = PacketConnect.unpackClient(data);

  // If success, hide menu & display game 
  if (received.success) {
    game.ui.menuState = MENU_STATE.NONE;
    game.ui.appHandler();
  }
}

function handlePacketStartMatch(data: Int8Array) {
  const received = PacketStartMatch.unpackClient(data);

  game.sandbox.running = true;
}