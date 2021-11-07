import { RhombusFromDiagonals } from "./rhombus-from-diagonals";
import { RhombusSideAndHeight } from "./rhombus-from-side-and-height";

export class Rhombus {
  static fromDiagonals(
    shorterDiagonal: number,
    longerDiagonal: number
  ): RhombusFromDiagonals {
    return new RhombusFromDiagonals(shorterDiagonal, longerDiagonal);
  }

  static fromSideAndHeight(side: number, height: number): RhombusSideAndHeight {
    return new RhombusSideAndHeight(side, height);
  }
}
