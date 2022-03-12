import { nextTick } from "process";
import { server } from "..";
import { PacketStartMatch } from "../../../shared/packets/packet_start_match";
import { PacketWorldUpdate } from "../../../shared/packets/packet_world_update";
import { PADDLE_TYPE } from "../../../shared/sandbox/paddle";
import { Sandbox } from "../../../shared/sandbox/sandbox";
import { Client } from "./network";
import { ServerSandboxHelper } from "./sandbox/server_sandbox_helper";

export class Room {
  public id: string;
  public clients: Client[];
  public sandbox: Sandbox;
  public sandboxHelper: ServerSandboxHelper;

  public readonly tps = 1000 / 10;
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

  public getAvailablePaddleType() {
    if (!this.connectable()) return PADDLE_TYPE.NONE;

    if (this.clients.length === 0) return PADDLE_TYPE.LEFT;
    else return this.clients[0].paddleType === PADDLE_TYPE.LEFT ? PADDLE_TYPE.RIGHT : PADDLE_TYPE.LEFT;
  }

  public connect(client: Client) {
    if (!this.connectable()) return;

    this.clients.push(client);
    client.roomId = this.id;
    client.paddleType = this.getAvailablePaddleType();

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
    this.sandboxHelper.tick();
    this.sandbox.tick();

    // Send world update packet to clients
    for (let i = 0; i < this.clients.length; ++i) {
      this.clients[i].socket.send(PacketWorldUpdate.packServer(
        this.sandbox.paddleLeft.pos.y,
        this.sandbox.paddleRight.pos.y,
        this.sandbox.ball.pos
      ))
    }
  }
}