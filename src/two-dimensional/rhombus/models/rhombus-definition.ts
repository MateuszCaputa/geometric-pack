import { Angle } from "../../../utils/angle/angle";

export interface RhombusDefinition {
  side: number;
  height: number;
  shorterDiagonal: number;
  longerDiagonal: number;
  alpha: Angle;
  beta: Angle;
  circumference: number;
  area: number;
}
