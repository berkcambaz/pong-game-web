import { Packet, PACKET_ID } from "./packet";

export class PacketConnect {
  public static packClient(roomId: string) {
    const packet = new Packet(PACKET_ID.CONNECT);
    packet.writeString(roomId);
    return packet.writeData.buffer;
  }

  public static unpackServer(data: ArrayBuffer) {
    const packet = new Packet(PACKET_ID.CONNECT, data);
    const roomId = packet.readString();
    return { roomId };
  }

  public static packServer(success: boolean) {
    const packet = new Packet(PACKET_ID.CONNECT);
    packet.writeBool(success);
    return packet.writeData.buffer;
  }

  public static unpackClient(data: ArrayBuffer) {
    const packet = new Packet(PACKET_ID.CONNECT, data);
    const success = packet.readBool();
    return { success };
  }
}