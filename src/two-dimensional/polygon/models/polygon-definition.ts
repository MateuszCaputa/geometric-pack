import { Angle } from "../../../utils/angle/angle";

export interface PolygonDefinition {
  sideLength: number;
  vertexCount: number;
  circumference: number;
  area: number;
  interiorAngle: Angle;
  exteriorAngle: Angle;
  outerCircleRadius: number;
  innerCircleRadius: number;
}
