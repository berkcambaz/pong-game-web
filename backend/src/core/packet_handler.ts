import { server } from "..";
import { Packet, PACKET_ID } from "../../../shared/packets/packet";
import { PacketConnect } from "../../../shared/packets/packet_connect";
import { PacketInit } from "../../../shared/packets/packet_init";
import { generateClientId } from "./id";
import { Client } from "./network";

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

  const id = generateClientId();
  if (id === "") { server.network.disconnect(client); return; }
  client.socket.send(PacketInit.packServer(id))
}

function handlePacketConnect(client: Client, data: Int8Array) {
  const received = PacketConnect.unpackServer(data);
}