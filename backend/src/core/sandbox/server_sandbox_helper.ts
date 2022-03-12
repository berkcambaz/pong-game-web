import { Room } from "../room";

export class ServerSandboxHelper {
  public room: Room;

  constructor(room: Room) {
    this.room = room;
  }

  public tick() {
    if (!this.room.sandbox.running) return;
  }
}