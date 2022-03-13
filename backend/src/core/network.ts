import { Server } from "http";
import websocket = require("ws");
import { PADDLE_TYPE } from "../../../shared/paddle_type";
import { generateClientId } from "./id";
import { PacketHandler } from "./packet_handler";
import { Room } from "./room";

export interface Client {
  socket: websocket.WebSocket;
  id: string;
  roomId: string;
  paddleType: PADDLE_TYPE;
}

export class Network {
  public clients: { [key: string]: Client };
  public rooms: { [key: string]: Room };
  public ws: websocket.Server<websocket.WebSocket>;

  constructor(server: Server) {
    this.clients = {};
    this.rooms = {};
    this.ws = new websocket.Server({ server: server });

    this.ws.on("connection", (socket, req) => {
      console.log("open");

      // Try to initialize the client
      const client: Client = {
        socket: socket,
        id: generateClientId(),
        roomId: "",
        paddleType: PADDLE_TYPE.NONE
      };
      if (client.id === "") { socket.close(); return; }
      this.clients[client.id] = client;

      socket.on("message", (data) => {
        //console.log("message");
        PacketHandler.handle(client, new Int8Array((data as ArrayBuffer)));
      });

      socket.on("close", (data) => {
        console.log("close");
        this.disconnect(client);
      });

      socket.on("error", (data) => {
        console.log("error");
        this.disconnect(client);
      });
    })
  }

  public disconnect(client: Client) {
    client.socket.close(1000);
    if (this.rooms[client.roomId]) this.rooms[client.roomId].disconnect(client);
    delete this.clients[client.id];
  }
}