import { nextTick } from "process";
import { server } from "..";
import { PacketStartMatch } from "../../../shared/packets/packet_start_match";
import { Sandbox } from "../../../shared/sandbox/sandbox";
import { Client } from "./network";
import { ServerSandboxHelper } from "./sandbox/server_sandbox_helper";

export class Room {
  public id: string;
  public clients: Client[];
  public sandbox: Sandbox;
  public sandboxHelper: ServerSandboxHelper;

  public readonly tps = 1000 / 30;
  private currentTime = 0;
  private accumulator = 0;

  constructor(id: string) {
    this.id = id;
    this.clients = [];
    this.sandbox = new Sandbox();
    this.sandboxHelper = new ServerSandboxHelper(this);
  }

  public connectable() {
    return this.clients.length !== 2;
  }

  public connect(client: Client) {
    if (!this.connectable()) return;

    this.clients.push(client);
    client.roomId = this.id;

    if (this.clients.length === 2) this.start();
  }

  public disconnect(client: Client) {
    const id = this.clients.findIndex((value) => value.id === client.id);
    if (id !== -1) {
      this.clients.splice(id, 1);
      this.sandbox.running = false;
      if (this.clients.length === 0) delete server.network.rooms[this.id];
    }
  }

  public start() {
    for (let i = 0; i < this.clients.length; ++i) {
      this.clients[i].socket.send(PacketStartMatch.packServer());
    }

    this.sandbox.running = true;
    setImmediate(() => { this.loop() })
  }

  public stop() {
    this.sandbox.running = false;
  }

  public loop() {
    let newTime = process.hrtime()[0] * 1000000 + process.hrtime()[1] / 1000;
    let frameTime = newTime - this.currentTime;
    if (frameTime > 25) frameTime = 25;
    this.accumulator += frameTime;

    while (this.accumulator >= this.tps) {
      this.tick();
      this.accumulator -= this.tps;
    }

    if (this.sandbox.running) setImmediate(() => { this.loop() });
  }

  public tick() {

  }
}