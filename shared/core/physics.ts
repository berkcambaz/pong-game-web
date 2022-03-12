import { Vec2 } from "./vec2";

export class Physics {
  public static box_box(pos1: Vec2, size1: Vec2, pos2: Vec2, size2: Vec2) {
    return pos1.x < pos2.x + size2.x
      && pos1.x + size1.x > pos2.x
      && pos1.y < pos2.y + size2.y
      && pos1.y + size1.y > pos2.y;
  }
}