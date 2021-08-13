import { GetDefinition } from "../../models/get-definition";
import { SphereDefinition } from "./models/sphere-definition";

export class Sphere implements GetDefinition<SphereDefinition> {
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
      throw new Error("Sphere constructor takes 1 argument");
    }
    if (this.hasNegative(args[0])) {
      throw new Error("Radius must be positive number");
    }
  }

  private hasNegative(radius: number): boolean {
    return radius <= 0;
  }

  getDefinition(): SphereDefinition {
    return {
      radius: this.radius,
      diameter: this.getDiameter(),
      volume: this.getVolume(),
      circumference: this.getCircumference(),
      area: this.getArea(),
    };
  }

  getVolume(): number {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }

  getCircumference(): number {
    return 2 * Math.PI * this.radius;
  }

  getArea(): number {
    return 4 * Math.PI * Math.pow(this.radius, 2);
  }

  getDiameter(): number {
    return 2 * this.radius;
  }
}
