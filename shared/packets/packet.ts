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

  constructor(id: PACKET_ID) {

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

  public readIntBool() {

  }

  public readIntString() {

  }
}