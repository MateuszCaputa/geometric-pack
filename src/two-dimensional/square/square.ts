import { GetDefinition } from "../../models/get-definition";
import { SquareDefinition } from "./models/square-definition";

export class Square implements GetDefinition<SquareDefinition> {
  public sideLength: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.sideLength = args[0];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 1) {
      throw new Error("Square constructor takes 1 argument");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length must be positive number");
    }
  }

  private hasNegative([sideLength]: number[]): boolean {
    return sideLength <= 0;
  }

  getDefinition(): SquareDefinition {
    return {
      sideLength: this.sideLength,
      circumference: this.getCircumference(),
      area: this.getArea(),
      diagonal: this.getDiagonal(),
      outerCircleRadius: this.getOuterCircleRadius(),
      innerCircleRadius: this.getInnerCircleRadius(),
    };
  }

  getCircumference(): number {
    return this.sideLength * 4;
  }

  getArea(): number {
    return Math.pow(this.sideLength, 2);
  }

  getDiagonal(): number {
    return Math.sqrt(this.getArea() * 2);
  }

  getOuterCircleRadius(): number {
    return this.getDiagonal() / 2;
  }

  getInnerCircleRadius(): number {
    return this.sideLength / 2;
  }
}
