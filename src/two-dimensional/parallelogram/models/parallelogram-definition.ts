import { Angle } from "../../../utils/angle/angle";

export interface ParallelogramDefinition {
  sideA: number;
  sideB: number;
  height: number;
  circumference: number;
  area: number;
  alpha: Angle;
  beta: Angle;
  shorterDiagonal: number;
  longerDiagonal: number;
}
