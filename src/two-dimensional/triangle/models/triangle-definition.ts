import { Angle } from "../../../utils/angle/angle";
import { TriangleHeights } from "./triangle-heights";

export interface TriangleDefinition {
  sideLengthA: number;
  sideLengthB: number;
  sideLengthC: number;
  circumference: number;
  area: number;
  hasRightAngle: boolean;
  heights: TriangleHeights;
  alpha: Angle;
  beta: Angle;
  gamma: Angle;
  outerCircleRadius: number;
  innerCircleRadius: number;
}
