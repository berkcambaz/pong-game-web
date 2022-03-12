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
  public writeData: Int8Array = new Int8Array(0);
  public readData: Int8Array = new Int8Array(0);
  public pos: number = 0;

  constructor(id: PACKET_ID, data?: ArrayBuffer) {
    if (data !== undefined) {
      this.readData = new Int8Array(data);
      this.pos = 1;
    }
    else {
      this.writeInt8(id);
    }
  }

  public writeInt8(value: number) {
    this.writeData = new Int8Array([...this.writeData, value]);
  }

  public writeInt16(value: number) {
    const converted = new Int8Array(new Int16Array([value]).buffer);
    this.writeData = new Int8Array([...this.writeData, ...converted]);
  }

  public writeInt32(value: number) {
    const converted = new Int8Array(new Int32Array([value]).buffer);
    this.writeData = new Int8Array([...this.writeData, ...converted]);
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