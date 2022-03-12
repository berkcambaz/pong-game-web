import { server } from "..";
import { Packet, PACKET_ID } from "../../../shared/packets/packet";
import { PacketConnect } from "../../../shared/packets/packet_connect";
import { PacketInit } from "../../../shared/packets/packet_init";
import { generateClientId } from "./id";
import { Client } from "./network";
import { Room } from "./room";

export class PacketHandler {
  public static handle(client: Client, data: Int8Array) {
    const packet = Packet.from(data);
    console.log(packet);

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

  let success = false;
  if (!server.network.rooms[received.id] && server.network.clients[received.id]) {
    success = true;
    const room = new Room(received.id);
    server.network.rooms[received.id] = room;

    room.connect(client);
    room.connect(server.network.clients[received.id]);
  }
  else if (server.network.rooms[received.id]) {
    success = server.network.rooms[received.id].connect(client);
  }

  client.socket.send(PacketConnect.packServer(success));
}