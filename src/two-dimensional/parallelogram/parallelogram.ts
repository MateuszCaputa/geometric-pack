import { NormalizeResults } from "../../utils/normalize-result";
import { GetDefinition } from "../../models/get-definition";
import { ParallelogramDefinition } from "./models/parallelogram-definition";
import { Angle } from "../../utils/angle/angle";

@NormalizeResults()
export class Parallelogram implements GetDefinition<ParallelogramDefinition> {
  public sideLengthA: number;
  public sideLengthB: number;
  public height: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.sideLengthA = args[0];
    this.sideLengthB = args[1];
    this.height = args[2];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 3) {
      throw new Error("Parallelogram constructor takes 3 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side lengths and height must be positive numbers");
    }
  }

  private hasNegative([sideLengthA, sideLengthB, height]: number[]): boolean {
    return sideLengthA <= 0 || sideLengthB <= 0 || height <= 0;
  }

  getDefinition(): ParallelogramDefinition {
    return {
      sideA: this.sideLengthA,
      sideB: this.sideLengthB,
      height: this.height,
      alpha: this.getAlpha(),
      beta: this.getBeta(),
      shorterDiagonal: this.getShorterDiagonal(),
      longerDiagonal: this.getLongerDiagonal(),
      circumference: this.getCircumference(),
      area: this.getArea(),
    };
  }

  getCircumference(): number {
    return this.sideLengthA * 2 + this.sideLengthB * 2;
  }

  getArea(): number {
    return this.sideLengthB * this.height;
  }

  getAlpha(): Angle {
    const radians = Math.asin(this.height / this.sideLengthA);
    return new Angle(radians);
  }

  getBeta(): Angle {
    return new Angle(Math.PI - this.getAlpha().originalRadians);
  }

  getLongerDiagonal(): number {
    return Math.sqrt(
      Math.pow(this.sideLengthA, 2) +
        Math.pow(this.sideLengthB, 2) +
        2 *
          this.sideLengthA *
          this.sideLengthB *
          Math.cos(this.getAlpha().originalRadians)
    );
  }

  getShorterDiagonal(): number {
    return Math.sqrt(
      Math.pow(this.sideLengthA, 2) +
        Math.pow(this.sideLengthB, 2) -
        2 *
          this.sideLengthA *
          this.sideLengthB *
          Math.cos(this.getAlpha().originalRadians)
    );
  }
}
