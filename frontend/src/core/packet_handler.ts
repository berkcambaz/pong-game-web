import { game } from "..";
import { Packet, PACKET_ID } from "../../../shared/packets/packet";
import { PacketInit } from "../../../shared/packets/packet_init";

export class PacketHandler {
  public static handle(data: Int8Array) {
    const packet = Packet.from(data);
    console.log(packet);

    switch (packet.id) {
      case PACKET_ID.INIT: handlePacketInit(data); break;
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