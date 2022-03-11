export class Maths {
  public static clamp(value: number, min: number, max: number) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
  }

  public static interp(a: number, b: number, amount: number) {
    return (b - a) * amount + a;
  }
}