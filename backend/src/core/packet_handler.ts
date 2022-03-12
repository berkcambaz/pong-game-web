import { server } from "..";
import { Packet, PACKET_ID } from "../../../shared/packets/packet";
import { PacketConnect } from "../../../shared/packets/packet_connect";
import { PacketInit } from "../../../shared/packets/packet_init";
import { PacketStartMatch } from "../../../shared/packets/packet_start_match";
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

    room.connect(server.network.clients[received.id]);
    if (received.id !== client.id) room.connect(client);
  }
  else if (server.network.rooms[received.id]) {
    success = server.network.rooms[received.id].connect(client);
  }

  client.socket.send(PacketConnect.packServer(success));
  if (success && server.network.rooms[received.id].clients.length === 2)
    server.network.rooms[received.id].start();
}