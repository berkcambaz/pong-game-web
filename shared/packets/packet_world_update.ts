import { Vec2 } from "../core/vec2";
import { Packet, PACKET_ID } from "./packet";

export class PacketWorldUpdate {
  public static packServer(paddleLeftY: number, paddleRightY: number, ballPos: Vec2, ballVel: Vec2) {
    const packet = Packet.create(PACKET_ID.WORLD_UPDATE);
    packet.writeFloat32(paddleLeftY);
    packet.writeFloat32(paddleRightY);
    packet.writeVec2(ballPos);
    packet.writeVec2(ballVel);
    return packet.writeData;
  }

  public static unpackClient(data: ArrayBuffer) {
    const packet = Packet.from(data);
    const paddleLeftY = packet.readFloat32();
    const paddleRightY = packet.readFloat32();
    const ballPos = packet.readVec2();
    const ballVel = packet.readVec2();
    return { paddleLeftY, paddleRightY, ballPos, ballVel };
  }
}