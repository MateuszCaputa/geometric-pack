import { NormalizeResults } from "../../utils/normalize-result";
import { GetDefinition } from "../../models/get-definition";
import { PyramidDefinition } from "./models/pyramid-definition";

@NormalizeResults()
export class Pyramid implements GetDefinition<PyramidDefinition> {
  public sideLength: number;
  public height: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.sideLength = args[0];
    this.height = args[1];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 2) {
      throw new Error("Pyramid constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length and height must be positive numbers");
    }
  }

  private hasNegative([sideLength, height]: number[]): boolean {
    return sideLength <= 0 || height <= 0;
  }

  getDefinition(): PyramidDefinition {
    return {
      sideLength: this.sideLength,
      height: this.height,
      volume: this.getVolume(),
      slantHeight: this.getSlantHeight(),
      lateralSurfaceArea: this.getLateralSurfaceArea(),
      baseSurfaceArea: this.getBaseSurfaceArea(),
      totalSurfaceArea: this.getTotalSurfaceArea(),
    };
  }

  getVolume(): number {
    return (1 / 3) * Math.pow(this.sideLength, 2) * this.height;
  }

  getSlantHeight(): number {
    return Math.sqrt(
      Math.pow(this.height, 2) + (1 / 4) * Math.pow(this.sideLength, 2)
    );
  }

  getLateralSurfaceArea(): number {
    return (
      this.sideLength *
      Math.sqrt(Math.pow(this.sideLength, 2) + 4 * Math.pow(this.height, 2))
    );
  }

  getBaseSurfaceArea(): number {
    return Math.pow(this.sideLength, 2);
  }

  getTotalSurfaceArea(): number {
    return this.getLateralSurfaceArea() + this.getBaseSurfaceArea();
  }
}
