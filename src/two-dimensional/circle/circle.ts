import { NormalizeResults } from "../../utils/normalize-result";
import { GetDefinition } from "../../models/get-definition";
import { CircleDefinition } from "./models/circle-definition";

@NormalizeResults()
export class Circle implements GetDefinition<CircleDefinition> {
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
      throw new Error("Circle constructor takes 1 argument");
    }
    if (this.hasNegative(args[0])) {
      throw new Error("radius must be positive number");
    }
  }

  private hasNegative(radius: number): boolean {
    return radius <= 0;
  }

  getDefinition(): CircleDefinition {
    return {
      radius: this.radius,
      diameter: this.getDiameter(),
      circumference: this.getCircumference(),
      area: this.getArea(),
    };
  }

  getCircumference(): number {
    return 2 * Math.PI * this.radius;
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getDiameter(): number {
    return 2 * this.radius;
  }
}
