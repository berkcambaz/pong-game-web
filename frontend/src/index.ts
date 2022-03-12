import { Packet, PACKET_ID } from "../../shared/packets/packet";
import { Game } from "./game/game";

import "./index.scss";

export const game = new Game();

window.onload = () => {
  game.run();
}

// Write number
//const test = new Uint8Array(new Float32Array([1.5]).buffer);
//let a = new Uint8Array([...test, 123]);
//console.log(...a);

// Write & read string
//let string = "ş";
//let charCodes: number[] = [];
//for (let i = 0; i < string.length; ++i) charCodes.push(string.charCodeAt(i));
//let ui32 = new Uint32Array(charCodes);
//let ui8 = new Uint8Array(ui32.buffer);
//console.log(...ui32);
//console.log(...ui8);
//console.log(String.fromCharCode(new Uint32Array(ui8.buffer)[0]));

const writePacket = new Packet(PACKET_ID.INIT);
writePacket.writeInt8(127);
writePacket.writeInt16(32767);
writePacket.writeInt32(2147483647);

console.log(`${127} ${32767} ${2147483647}`);
console.log(...writePacket.writeData);

const readPacket = new Packet(PACKET_ID.INIT, writePacket.writeData);
const int8 = readPacket.readInt8();
const int16 = readPacket.readInt16();
const int32 = readPacket.readInt32();
console.log(`${int8} ${int16} ${int32}`);