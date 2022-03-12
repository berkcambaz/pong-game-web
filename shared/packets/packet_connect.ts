import { Packet, PACKET_ID } from "./packet";

export class PacketConnect {
  public static packClient(roomId: string) {
    const packet = Packet.create(PACKET_ID.CONNECT);
    packet.writeString(roomId);
    return packet.writeData.buffer;
  }

  public static unpackServer(data: ArrayBuffer) {
    const packet = Packet.from(data);
    const roomId = packet.readString(5);
    return { roomId };
  }

  public static packServer(success: boolean) {
    const packet = Packet.create(PACKET_ID.CONNECT);
    packet.writeBool(success);
    return packet.writeData.buffer;
  }

  public static unpackClient(data: ArrayBuffer) {
    const packet = Packet.from(data);
    const success = packet.readBool();
    return { success };
  }
}