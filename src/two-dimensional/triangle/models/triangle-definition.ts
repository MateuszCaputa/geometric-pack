import { TriangleAngles } from "./triangle-angles";
import { TriangleHeights } from "./triangle-heights";

export interface TriangleDefinition {
  sideLengthA: number;
  sideLengthB: number;
  sideLengthC: number;
  circumference: number;
  area: number;
  isRightAngle: boolean;
  heights: TriangleHeights;
  angles: TriangleAngles;
  outerCircleRadius: number;
  innerCircleRadius: number;
}
