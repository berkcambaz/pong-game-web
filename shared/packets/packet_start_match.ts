import { Packet, PACKET_ID } from "./packet";

export class PacketStartMatch {
  public static packServer() {
    const packet = Packet.create(PACKET_ID.START_MATCH);
    return packet.writeData;
  }

  public static unpackClient(data: ArrayBuffer) {
    const packet = Packet.from(data);
    return {};
  }
}