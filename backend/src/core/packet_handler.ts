import { Packet } from "../../../shared/packets/packet";

export class PacketHandler {
  public static handle(data: Int8Array) {
    const packet = Packet.from(data);
    console.log(packet);

    switch (packet.id) {
      default: break;
    }
  }
}