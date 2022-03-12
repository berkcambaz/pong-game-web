import websocket = require("ws");

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