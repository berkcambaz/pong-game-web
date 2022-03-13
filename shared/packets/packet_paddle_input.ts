import { PADDLE_INPUT } from "../paddle_input";
import { Packet, PACKET_ID } from "./packet";

export class PacketPaddleInput {
  public static packClient(movY: number) {
    const packet = Packet.create(PACKET_ID.PADDLE_INPUT);
    packet.writeFloat32(movY);
    return packet.writeData;
  }

  public static unpackServer(data: ArrayBuffer) {
    const packet = Packet.from(data);
    const movY = packet.readFloat32();
    return { movY }
  }
}