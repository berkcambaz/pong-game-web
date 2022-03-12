import { Packet, PACKET_ID } from "../../../shared/packets/packet";

export class Network {
  public ws!: WebSocket;
  public uid!: string;

  constructor() {
    this.ws = new WebSocket("ws://" + window.location.hostname + ":8888");
    this.uid = "";

    this.ws.onopen = (ev) => {
      console.log("open");

      const packet = Packet.create(PACKET_ID.INIT);
      this.send(packet);
    }

    this.ws.onmessage = (ev) => {
      console.log("message");
    }

    this.ws.onclose = (ev) => {
      console.log("close");
    }

    this.ws.onerror = (ev) => {
      console.log("error");
    }
  }

  public send(packet: Packet) {
    if (!this.isOnline()) return;
    this.ws.send(packet.writeData);
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