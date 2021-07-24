import { TubeDefinition } from "./models/tube-definition";

export class Tube {
  public outerRadius: number;
  public innerRadius: number;
  public height: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.outerRadius = args[0];
    this.innerRadius = args[1];
    this.height = args[2];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 3) {
      throw new Error("Tube constructor takes 3 arguments");
    }
    if (args[0] <= args[1]) {
      throw new Error("Outer radius must be bigger number than inner radius");
    }
    if (this.hasNegative(args)) {
      throw new Error("Radiuses and height must be positive numbers");
    }
  }

  private hasNegative([outerRadius, innerRadius, height]: number[]): boolean {
    return outerRadius <= 0 || innerRadius <= 0 || height <= 0;
  }

  getDefinition(): TubeDefinition {
    return {
      outerRadius: this.outerRadius,
      innerRadius: this.innerRadius,
      height: this.height,
      outerCircumference: this.getOuterCircumference(),
      innerCircumference: this.getInnerCircumference(),
      ExternalLateralSurfaceArea: this.getExternalLateralSurfaceArea(),
      InternalLateralSurfaceArea: this.getInternalLateralSurfaceArea(),
      outerArea: this.getOuterArea(),
      innerArea: this.getInnerArea(),
      endSurfaceArea: this.getEndSurfaceArea(),
      outerVolume: this.getOuterVolume(),
      innerVolume: this.getInnerVolume(),
      solidVolume: this.getSolidVolume(),
      wallThickness: this.getWallThickness(),
    };
  }

  getOuterCircumference(): number {
    return 2 * Math.PI * this.outerRadius;
  }

  getInnerCircumference(): number {
    return 2 * Math.PI * this.innerRadius;
  }

  getExternalLateralSurfaceArea(): number {
    return 2 * Math.PI * this.outerRadius * this.height;
  }

  getInternalLateralSurfaceArea(): number {
    return 2 * Math.PI * this.innerRadius * this.height;
  }

  getOuterArea(): number {
    return Math.PI * Math.pow(this.outerRadius, 2);
  }

  getInnerArea(): number {
    return Math.PI * Math.pow(this.innerRadius, 2);
  }

  getEndSurfaceArea(): number {
    return this.getOuterArea() - this.getInnerArea();
  }

  getOuterVolume(): number {
    return Math.PI * Math.pow(this.outerRadius, 2) * this.height;
  }

  getInnerVolume(): number {
    return Math.PI * Math.pow(this.innerRadius, 2) * this.height;
  }

  getSolidVolume(): number {
    return this.getOuterVolume() - this.getInnerVolume();
  }

  getWallThickness(): number {
    return this.outerRadius - this.innerRadius;
  }
}
