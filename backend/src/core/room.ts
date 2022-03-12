import { Sandbox } from "../../../shared/sandbox/sandbox";
import { ServerSandboxHelper } from "./sandbox/server_sandbox_helper";

export class Room {
  public sandbox: Sandbox;
  public sandboxHelper: ServerSandboxHelper;

  constructor() {
    this.sandbox = new Sandbox();
    this.sandboxHelper = new ServerSandboxHelper();
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