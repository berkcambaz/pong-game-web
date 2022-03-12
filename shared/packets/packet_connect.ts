import { Packet, PACKET_ID } from "./packet";

export class PacketConnect {
  public static packClient(id: string) {
    const packet = Packet.create(PACKET_ID.CONNECT);
    packet.writeString(id);
    return packet.writeData;
  }

  public static unpackServer(data: ArrayBuffer) {
    const packet = Packet.from(data);
    const id = packet.readString(5);
    return { id };
  }

  public static packServer(success: boolean) {
    const packet = Packet.create(PACKET_ID.CONNECT);
    packet.writeBool(success);
    return packet.writeData;
  }

  public static unpackClient(data: ArrayBuffer) {
    const packet = Packet.from(data);
    const success = packet.readBool();
    return { success };
  }
}