import { Packet, PACKET_ID } from "../../../shared/packets/packet";
import { PacketInit } from "../../../shared/packets/packet_init";
import { PacketHandler } from "./packet_handler";

export class Network {
  public ws!: WebSocket;
  public id: string = "";

  public init() {
    this.ws = new WebSocket("ws://" + window.location.hostname);
    this.id = "";

    this.ws.binaryType = "arraybuffer";

    this.ws.onopen = (ev) => {
      console.log("open");
      this.send(PacketInit.packClient());
    }

    this.ws.onmessage = (ev) => {
      //console.log("message");
      PacketHandler.handle(new Int8Array((ev.data as ArrayBuffer)));
    }

    this.ws.onclose = (ev) => {
      console.log("close");
    }

    this.ws.onerror = (ev) => {
      console.log("error");
    }
  }

  public send(data: Int8Array) {
    if (!this.isOnline()) return;
    this.ws.send(data);
  }

  public stop() {
    this.ws.close(1000);
  }

  public isOnline() {
    return this.ws.readyState !== this.ws.CLOSED;
  }

  public isStarted() {
    return this.ws && this.ws.readyState === this.ws.OPEN;
  }
}