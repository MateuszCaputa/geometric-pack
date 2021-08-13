import { GetDefinition } from "../../models/get-definition";
import { RectangleDefinition } from "./models/rectangle-definition";

export class Rectangle implements GetDefinition<RectangleDefinition> {
  public sideLengthA: number;
  public sideLengthB: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.sideLengthA = args[0];
    this.sideLengthB = args[1];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 2) {
      throw new Error("Rectangle takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Sides lengths must be positive numbers");
    }
  }

  private hasNegative([sideLengthA, sideLengthB]: number[]): boolean {
    return sideLengthA <= 0 || sideLengthB <= 0;
  }

  getDefinition(): RectangleDefinition {
    return {
      sideLengthA: this.sideLengthA,
      sideLengthB: this.sideLengthB,
      circumference: this.getCircumference(),
      area: this.getArea(),
      diagonal: this.getDiagonal(),
    };
  }

  getCircumference(): number {
    return this.sideLengthA * 2 + this.sideLengthB * 2;
  }

  getArea(): number {
    return this.sideLengthA * this.sideLengthB;
  }

  getDiagonal(): number {
    return Math.sqrt(
      Math.pow(this.sideLengthA, 2) + Math.pow(this.sideLengthB, 2)
    );
  }
}
