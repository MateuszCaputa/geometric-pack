import { NormalizeResults } from "../../utils/normalize-result";
import { GetDefinition } from "../../models/get-definition";
import { ConicalFrustumDefinition } from "./models/conical-frustum-definition";

@NormalizeResults()
export class ConicalFrustum implements GetDefinition<ConicalFrustumDefinition> {
  public radius1: number;
  public radius2: number;
  public height: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.radius1 = args[0];
    this.radius2 = args[1];
    this.height = args[2];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 3) {
      throw new Error("ConicalFrustum constructor takes 3 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Radiuses and height must be positive numbers");
    }
  }

  private hasNegative([radius1, radius2, height]: number[]): boolean {
    return radius1 <= 0 || radius2 <= 0 || height <= 0;
  }

  getDefinition(): ConicalFrustumDefinition {
    return {
      radius1: this.radius1,
      radius2: this.radius2,
      height: this.height,
      slantHeight: this.getSlantHeight(),
      volume: this.getVolume(),
      lateralSurfaceArea: this.getLateralSurfaceArea(),
      topSurfaceArea: this.getTopSurfaceArea(),
      baseSurfaceArea: this.getBaseSurfaceArea(),
      totalSurfaceArea: this.getTotalSurfaceArea(),
    };
  }

  getSlantHeight(): number {
    return Math.sqrt(
      Math.pow(this.radius1 - this.radius2, 2) + Math.pow(this.height, 2)
    );
  }

  getVolume(): number {
    return (
      (1 / 3) *
      Math.PI *
      this.height *
      (Math.pow(this.radius1, 2) +
        Math.pow(this.radius2, 2) +
        this.radius1 * this.radius2)
    );
  }

  getLateralSurfaceArea(): number {
    return Math.PI * (this.radius1 + this.radius2) * this.getSlantHeight();
  }

  getTopSurfaceArea(): number {
    return Math.PI * Math.pow(this.radius1, 2);
  }

  getBaseSurfaceArea(): number {
    return Math.PI * Math.pow(this.radius2, 2);
  }

  getTotalSurfaceArea(): number {
    return (
      this.getLateralSurfaceArea() +
      this.getTopSurfaceArea() +
      this.getBaseSurfaceArea()
    );
  }
}
