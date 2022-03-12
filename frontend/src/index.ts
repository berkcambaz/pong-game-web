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