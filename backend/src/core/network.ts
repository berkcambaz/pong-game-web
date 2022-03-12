import websocket = require("ws");
import { PacketHandler } from "./packet_handler";

export class Network {
  public ws: websocket.Server<websocket.WebSocket>;

  constructor() {
    this.ws = new websocket.Server({ host: "0.0.0.0", port: 8888 }, () => {
      console.log("Websocket has started...")
    });

    this.ws.on("connection", (socket, req) => {
      console.log("open");

      socket.on("message", (data) => {
        console.log("message");
        PacketHandler.handle(new Int8Array((data as ArrayBuffer)));
      });

      socket.on("close", (data) => {
        console.log("close");
      });

      socket.on("error", (data) => {
        console.log("error");
      });
    })
  }
}