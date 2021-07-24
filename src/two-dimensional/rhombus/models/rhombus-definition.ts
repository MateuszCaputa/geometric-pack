import { RhombusAngles } from "./rhombus-angles";
import { RhombusDiagonals } from "./rhombus-diagonals";

export interface RhombusDefinition {
  sideLength: number;
  height: number;
  circumference: number;
  area: number;
  cornerAngles: RhombusAngles;
  diagonals: RhombusDiagonals;
}
