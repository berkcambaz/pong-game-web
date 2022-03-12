export class Random {
  public static number(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}