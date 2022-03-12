import { Sandbox } from "../../../shared/sandbox/sandbox";
import { Client } from "./network";
import { ServerSandboxHelper } from "./sandbox/server_sandbox_helper";

export class Room {
  public id: string;
  public clients: Client[];
  public sandbox: Sandbox;
  public sandboxHelper: ServerSandboxHelper;

  constructor(id: string) {
    this.id = id;
    this.clients = [];
    this.sandbox = new Sandbox();
    this.sandboxHelper = new ServerSandboxHelper(this);
  }

  public connect(client: Client) {
    if (this.clients.length === 2) return false;
    this.clients.push(client);
    client.roomId = this.id;
    return true;
  }

  public disconnect(client: Client) {
    const id = this.clients.findIndex((value) => value.id === client.id);
    if (id !== -1) {
      this.clients.splice(id, 1);
    }
  }

  public start() {

  }

  public stop() {

  }

  public loop() {

  }

  public tick() {

  }
}