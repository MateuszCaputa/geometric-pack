import { transformRadiansToDegrees } from "../../utils/transform";
import { NormalizeResults } from "../../utils/normalize-result";
import { GetDefinition } from "../../models/get-definition";
import { PolygonDefinition } from "./models/polygon-definition";
import { PolygonAngles } from "./models/polygon-angles";

@NormalizeResults()
export class Polygon implements GetDefinition<PolygonDefinition> {
  public sideLength: number;
  public vertexCount: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.sideLength = args[0];
    this.vertexCount = args[1];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 2) {
      throw new Error("Polygon constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length and vertex count must be positive numbers");
    }
    if (this.requirement(args[1])) {
      throw new Error("Vertex count must be between 3 and 14");
    }
  }

  private hasNegative([sideLength, vertexCount]: number[]): boolean {
    return sideLength <= 0 || vertexCount <= 0;
  }

  private requirement(vertexCount: number): boolean {
    return vertexCount < 3 || vertexCount > 14;
  }

  getDefinition(): PolygonDefinition {
    return {
      sideLength: this.sideLength,
      vertexCount: this.vertexCount,
      circumference: this.getCircumference(),
      area: this.getArea(),
      angels: this.getAngles(),
      outerCircleRadius: this.getOuterCircleRadius(),
      innerCircleRadius: this.getInnerCircleRadius(),
    };
  }

  getCircumference(): number {
    return this.sideLength * this.vertexCount;
  }

  getArea(): number {
    return (
      (1 / 4) *
      this.vertexCount *
      Math.pow(this.sideLength, 2) *
      (1 / Math.tan(Math.PI / this.vertexCount))
    );
  }

  getInteriorAngle(): number {
    const radians = ((this.vertexCount - 2) * Math.PI) / this.vertexCount;
    return transformRadiansToDegrees(radians);
  }

  getExteriorAngle(): number {
    const radians = (2 * Math.PI) / this.vertexCount;
    return transformRadiansToDegrees(radians);
  }

  getAngles(): PolygonAngles {
    return {
      interiorAngle: this.getInteriorAngle(),
      exteriorAngle: this.getExteriorAngle(),
    };
  }

  getOuterCircleRadius(): number {
    return (
      (1 / 2) * this.sideLength * (1 / Math.sin(Math.PI / this.vertexCount))
    );
  }

  getInnerCircleRadius(): number {
    return (
      (1 / 2) * this.sideLength * (1 / Math.tan(Math.PI / this.vertexCount))
    );
  }
}
