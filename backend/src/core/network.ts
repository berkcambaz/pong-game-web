import websocket = require("ws");
import { generateClientId, generateId } from "./id";
import { PacketHandler } from "./packet_handler";
import { Room } from "./room";

export interface Client {
  socket: websocket.WebSocket;
  id: string;
}

export class Network {
  public clients: { [key: string]: Client };
  public rooms: { [key: string]: Room };
  public ws: websocket.Server<websocket.WebSocket>;

  constructor() {
    this.clients = {};
    this.rooms = {};
    this.ws = new websocket.Server({ host: "0.0.0.0", port: 8888 }, () => {
      console.log("Websocket has started...")
    });

    this.ws.on("connection", (socket, req) => {
      console.log("open");

      // Try to initialize the client
      const client: Client = { socket: socket, id: generateClientId() };
      if (client.id === "") { socket.close(); return; }
      this.clients[client.id] = client;

      socket.on("message", (data) => {
        console.log("message");
        PacketHandler.handle(client, new Int8Array((data as ArrayBuffer)));
      });

      socket.on("close", (data) => {
        console.log("close");
        this.disconnect(client);
      });

      socket.on("error", (data) => {
        console.log("error");
      });
    })
  }

  public disconnect(client: Client) {
    client.socket.close(1000);
    delete this.clients[client.id];
  }
}