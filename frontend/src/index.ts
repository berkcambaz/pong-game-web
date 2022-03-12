import { Game } from "./game/game";

import "./index.scss";

export const game = new Game();

window.onload = () => {
  game.run();
}

//const test = new Uint8Array(new Float32Array([1.5]).buffer);
//let a = new Uint8Array([...test, 123]);
//console.log(...a);