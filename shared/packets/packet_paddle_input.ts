import { PADDLE_INPUT } from "../paddle_input";
import { Packet, PACKET_ID } from "./packet";

export class PacketPaddleInput {
  public static packClient(paddleInput: PADDLE_INPUT) {
    const packet = Packet.create(PACKET_ID.PADDLE_INPUT);
    packet.writeInt8(paddleInput);
    return packet.writeData;
  }

  public static unpackServer(data: ArrayBuffer) {
    const packet = Packet.from(data);
    const paddleInput = packet.readInt8() as PADDLE_INPUT;
    return { paddleInput }
  }
}