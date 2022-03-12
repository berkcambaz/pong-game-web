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

  public writeFloat32(value: number) {
    const converted = new Int8Array(new Float32Array([value]).buffer);
    this.writeData = new Int8Array([...this.writeData, ...converted]);
  }

  public writeBool(value: boolean) {
    this.writeData = new Int8Array([...this.writeData, value ? 1 : 0]);
  }

  public writeString(value: string) {
    const charCodes: number[] = [];
    for (let i = 0; i < value.length; ++i) charCodes.push(value.charCodeAt(i));
    this.writeData = new Int8Array([...this.writeData, ...new Int8Array(new Int32Array(charCodes).buffer)]);
  }

  public readInt8() {
    const int8 = this.readData[this.pos];
    this.pos += 1;
    return int8;
  }

  public readInt16() {
    const int16 = new Int16Array(new Int8Array([...this.readData.subarray(this.pos, this.pos + 2)]).buffer)[0];
    this.pos += 2;
    return int16;
  }

  public readInt32() {
    const int32 = new Int32Array(new Int8Array([...this.readData.subarray(this.pos, this.pos + 4)]).buffer)[0];
    this.pos += 4;
    return int32;
  }

  public readFloat32() {
    const float32 = new Float32Array(new Int8Array([...this.readData.subarray(this.pos, this.pos + 4)]).buffer)[0];
    this.pos += 4;
    return float32;
  }

  public readBool() {
    const bool = this.readData[this.pos];
    this.pos += 1;
    return !!bool;
  }

  public readString(length: number) {
    const charCodes = new Int32Array(new Int8Array([...this.readData.subarray(this.pos, this.pos + length * 4)]).buffer);
    this.pos += length * 4;
    return String.fromCharCode(...charCodes);
  }
}