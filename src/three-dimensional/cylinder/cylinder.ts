import { GetDefinition } from "../../models/get-definition";
import { CylinderDefinition } from "./models/cylinder-definition";

export class Cylinder implements GetDefinition<CylinderDefinition> {
  public radius: number;
  public height: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.radius = args[0];
    this.height = args[1];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 2) {
      throw new Error("Cylinder constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Radius and height must be positive numbers");
    }
  }

  private hasNegative([radius, height]: number[]): boolean {
    return radius <= 0 || height <= 0;
  }

  getDefinition(): CylinderDefinition {
    return {
      radius: this.radius,
      height: this.height,
      volume: this.getVolume(),
      lateralSurfaceArea: this.getLateralSurfaceArea(),
      baseSurfaceArea: this.getBaseSurfaceArea(),
      totalSurfaceArea: this.getTotalSurfaceArea(),
    };
  }

  getVolume(): number {
    return Math.PI * Math.pow(this.radius, 2) * this.height;
  }

  getLateralSurfaceArea(): number {
    return 2 * Math.PI * this.radius * this.height;
  }

  getBaseSurfaceArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getTotalSurfaceArea(): number {
    return this.getLateralSurfaceArea() + 2 * this.getBaseSurfaceArea();
  }
}
