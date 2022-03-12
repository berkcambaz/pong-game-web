import { Packet, PACKET_ID } from "./packet";

export class PacketInit {
  public static packClient() {
    const packet = Packet.create(PACKET_ID.INIT);
    return packet.writeData.buffer;
  }

  public static unpackServer(data: ArrayBuffer) {
    const packet = Packet.from(data);
    return {};
  }

  public static packServer(roomId: string) {
    const packet = Packet.create(PACKET_ID.INIT);
    packet.writeString(roomId);
    return packet.writeData.buffer;
  }

  public static unpackClient(data: ArrayBuffer) {
    const packet = Packet.from(data);
    const roomId = packet.readString(5);
    return { roomId };
  }
}