import { Packet, PACKET_ID } from "../../shared/packets/packet";
import { Game } from "./game/game";

import "./index.scss";

export const game = new Game();

window.onload = () => {
  game.run();
}

/// PACKET TEST FOR READ/WRITE \\\
//const writePacket = new Packet(PACKET_ID.INIT);
//writePacket.writeInt8(127);
//writePacket.writeInt16(32767);
//writePacket.writeInt32(2147483647);
//writePacket.writeBool(false);
//writePacket.writeString("'hello ğış'");
//writePacket.writeFloat32(123.123);
//
//const readPacket = new Packet(PACKET_ID.INIT, writePacket.writeData);
//const int8 = readPacket.readInt8();
//const int16 = readPacket.readInt16();
//const int32 = readPacket.readInt32();
//const bool = readPacket.readBool();
//const string = readPacket.readString("'hello ğış'".length);
//const float32 = readPacket.readFloat32();
//
//console.log(`${int8} ${int16} ${int32} ${bool} ${string} ${float32}`);
//console.log(`${127} ${32767} ${2147483647} ${false} ${"'hello ğış'"} ${123.123}`);
//console.log(...writePacket.writeData);