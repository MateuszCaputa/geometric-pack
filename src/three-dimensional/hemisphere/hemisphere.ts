import { GetDefinition } from "../../models/get-definition";
import { HemisphereDefinition } from "./models/hemisphere-definition";

export class Hemisphere implements GetDefinition<HemisphereDefinition> {
  public radius: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.radius = args[0];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 1) {
      throw new Error("Hemisphere constructor takes 1 argument");
    }
    if (this.hasNegative(args[0])) {
      throw new Error("Radius must be positive number");
    }
  }

  private hasNegative(radius: number): boolean {
    return radius <= 0;
  }

  getDefinition(): HemisphereDefinition {
    return {
      radius: this.radius,
      volume: this.getVolume(),
      baseCircumference: this.getBaseCircumference(),
      curvedSurfaceArea: this.getCurvedSurfaceArea(),
      baseSurfaceArea: this.getBaseSurfaceArea(),
      totalSurfaceArea: this.getTotalSurfaceArea(),
    };
  }

  getVolume(): number {
    return (2 / 3) * Math.PI * Math.pow(this.radius, 3);
  }

  getBaseCircumference(): number {
    return 2 * Math.PI * this.radius;
  }

  getCurvedSurfaceArea(): number {
    return 2 * Math.PI * Math.pow(this.radius, 2);
  }

  getBaseSurfaceArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getTotalSurfaceArea(): number {
    return this.getCurvedSurfaceArea() + this.getBaseSurfaceArea();
  }
}
