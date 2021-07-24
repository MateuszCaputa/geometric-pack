import { PolygonAngles } from "./polygon-angles";

export interface PolygonDefinition {
  sideLength: number;
  vertexCount: number;
  circumference: number;
  area: number;
  angels: PolygonAngles;
  outerCircleRadius: number;
  innerCircleRadius: number;
}
