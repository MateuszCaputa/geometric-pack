import { GetDefinition } from "../../models/get-definition";
import { ConeDefinition } from "./models/cone-definition";

export class Cone implements GetDefinition<ConeDefinition> {
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
      throw new Error("Cone constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Radius and height must be positive numbers");
    }
  }

  private hasNegative([radius, height]: number[]): boolean {
    return radius <= 0 || height <= 0;
  }

  getDefinition(): ConeDefinition {
    return {
      radius: this.radius,
      height: this.height,
      slantHeight: this.getSlantHeight(),
      volume: this.getVolume(),
      lateralSurfaceArea: this.getLateralSurfaceArea(),
      baseSurfaceArea: this.getBaseSurfaceArea(),
      totalSurfaceArea: this.getTotalSurfaceArea(),
    };
  }

  getSlantHeight(): number {
    return Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
  }

  getVolume(): number {
    return (1 / 3) * Math.PI * Math.pow(this.radius, 2) * this.height;
  }

  getLateralSurfaceArea(): number {
    return Math.PI * this.radius * this.getSlantHeight();
  }

  getBaseSurfaceArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getTotalSurfaceArea(): number {
    return this.getLateralSurfaceArea() + this.getBaseSurfaceArea();
  }
}
