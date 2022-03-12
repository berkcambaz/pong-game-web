export enum PACKET_ID {
  INIT,

  CONNECT,
  DISCONNECT,

  PADDLE_INPUT,

  WORLD_UPDATE,
  SCORE_UPDATE,

  START_MATCH
}

export class Packet {
  public writeData: Uint8Array = new Uint8Array(0);
  public readData: Uint8Array = new Uint8Array(0);
  public pos: number = 0;

  constructor(id: PACKET_ID, data?: ArrayBuffer) {
    if (data !== undefined) {
      this.readData = new Uint8Array(data);
      this.pos = 1;
    }
    else {
      this.writeInt8(id);
    }
  }

  public writeInt8(value: number) {

  }

  public writeInt16(value: number) {

  }

  public writeInt32(value: number) {

  }

  public writeBool(value: boolean) {

  }

  public writeString(value: string) {

  }

  public readInt8() {

  }

  public readInt16() {

  }

  public readInt32() {

  }

  public readBool() {

  }

  public readString() {

  }
}