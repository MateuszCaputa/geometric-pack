import { ParallelogramAngles } from "./parallelogram-angles";
import { ParallelogramDiagonals } from "./parallelogram-diagonals";

export interface ParallelogramDefinition {
  sideLengthA: number;
  sideLengthB: number;
  height: number;
  circumference: number;
  area: number;
  cornerAngles: ParallelogramAngles;
  diagonals: ParallelogramDiagonals;
}
