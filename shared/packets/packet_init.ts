import { Packet, PACKET_ID } from "./packet";

export class PacketInit {
  public static packClient() {
    const packet = Packet.create(PACKET_ID.INIT);
    return packet.writeData;
  }

  public static unpackServer(data: ArrayBuffer) {
    const packet = Packet.from(data);
    return {};
  }

  public static packServer(id: string) {
    const packet = Packet.create(PACKET_ID.INIT);
    packet.writeString(id);
    return packet.writeData;
  }

  public static unpackClient(data: ArrayBuffer) {
    const packet = Packet.from(data);
    const id = packet.readString(5);
    return { id };
  }
}