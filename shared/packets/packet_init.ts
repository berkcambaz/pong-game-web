import { Packet, PACKET_ID } from "./packet";

export class PacketInit {
  public static packClient() {
    const packet = new Packet(PACKET_ID.INIT);
    return packet.writeData.buffer;
  }

  public static unpackServer(data: ArrayBuffer) {
    const packet = new Packet(PACKET_ID.INIT, data);
    return {};
  }

  public static packServer(roomId: string) {
    const packet = new Packet(PACKET_ID.INIT);
    packet.writeString(roomId);
    return packet.writeData.buffer;
  }

  public static unpackClient(data: ArrayBuffer) {
    const packet = new Packet(PACKET_ID.INIT, data);
    const roomId = packet.readString(5);
    return { roomId };
  }
}