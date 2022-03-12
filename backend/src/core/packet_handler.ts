import { server } from "..";
import { Packet, PACKET_ID } from "../../../shared/packets/packet";
import { PacketConnect } from "../../../shared/packets/packet_connect";
import { PacketInit } from "../../../shared/packets/packet_init";
import { PADDLE_TYPE } from "../../../shared/sandbox/paddle";
import { Client } from "./network";
import { Room } from "./room";

export class PacketHandler {
  public static handle(client: Client, data: Int8Array) {
    const packet = Packet.from(data);

    switch (packet.id) {
      case PACKET_ID.INIT: handlePacketInit(client, data); break;
      case PACKET_ID.CONNECT: handlePacketConnect(client, data); break;
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