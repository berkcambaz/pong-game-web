import { server } from "..";
import { Packet, PACKET_ID } from "../../../shared/packets/packet";
import { PacketConnect } from "../../../shared/packets/packet_connect";
import { PacketInit } from "../../../shared/packets/packet_init";
import { PacketPaddleInput } from "../../../shared/packets/packet_paddle_input";
import { PADDLE_INPUT } from "../../../shared/paddle_input";
import { PADDLE_TYPE } from "../../../shared/paddle_type";
import { Client } from "./network";
import { Room } from "./room";
import { Paddle } from "./sandbox/paddle";

export class PacketHandler {
  public static handle(client: Client, data: Int8Array) {
    const packet = Packet.from(data);

    switch (packet.id) {
      case PACKET_ID.INIT: handlePacketInit(client, data); break;
      case PACKET_ID.CONNECT: handlePacketConnect(client, data); break;
      case PACKET_ID.PADDLE_INPUT: handlePacketPaddleInput(client, data); break;
      default: break;
    }
  }
}

function handlePacketInit(client: Client, data: Int8Array) {
  const received = PacketInit.unpackServer(data);

  client.socket.send(PacketInit.packServer(client.id));
}

function handlePacketConnect(client: Client, data: Int8Array) {
  const received = PacketConnect.unpackServer(data);

  if (!server.network.rooms[received.id] && server.network.clients[received.id]) {
    const room = new Room(received.id);
    server.network.rooms[received.id] = room;

    server.network.clients[received.id].socket.send(PacketConnect.packServer(true, PADDLE_TYPE.LEFT));
    room.connect(server.network.clients[received.id]);
    if (received.id !== client.id) {
      client.socket.send(PacketConnect.packServer(true, PADDLE_TYPE.RIGHT));
      room.connect(client);
    }
  }
  else if (server.network.rooms[received.id]) {
    let success = server.network.rooms[received.id].connectable();
    let paddleType = server.network.rooms[received.id].getAvailablePaddleType();
    client.socket.send(PacketConnect.packServer(success, paddleType));

    server.network.rooms[received.id].connect(client);
  }
}

function handlePacketPaddleInput(client: Client, data: Int8Array) {
  const received = PacketPaddleInput.unpackServer(data);

  let paddle: Paddle;
  switch (client.paddleType) {
    case PADDLE_TYPE.LEFT: paddle = server.network.rooms[client.roomId].sandbox.paddleLeft; break;
    case PADDLE_TYPE.RIGHT: paddle = server.network.rooms[client.roomId].sandbox.paddleRight; break;
    default: return;
  }

  switch (received.paddleInput) {
    case PADDLE_INPUT.NONE: break;
    case PADDLE_INPUT.UP: paddle.pos.y -= 10; break;
    case PADDLE_INPUT.DOWN: paddle.pos.y += 10; break;
  }
}