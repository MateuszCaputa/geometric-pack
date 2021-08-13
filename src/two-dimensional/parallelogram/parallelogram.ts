import { transformRadiansToDegrees } from "../../utils/transform";
import { GetDefinition } from "../../models/get-definition";
import { ParallelogramDefinition } from "./models/parallelogram-definition";
import { ParallelogramAngles } from "./models/parallelogram-angles";
import { ParallelogramDiagonals } from "./models/parallelogram-diagonals";

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
      sideLengthA: this.sideLengthA,
      sideLengthB: this.sideLengthB,
      height: this.height,
      circumference: this.getCircumference(),
      area: this.getArea(),
      cornerAngles: this.getAngles(),
      diagonals: this.getDiagonals(),
    };
  }

  getCircumference(): number {
    return this.sideLengthA * 2 + this.sideLengthB * 2;
  }

  getArea(): number {
    return this.sideLengthB * this.height;
  }

  getAlpha(): number {
    const radians = Math.asin(this.height / this.sideLengthA);
    return transformRadiansToDegrees(radians);
  }

  getBeta(): number {
    return 180 - this.getAlpha();
  }

  getAngles(): ParallelogramAngles {
    return {
      alpha: this.getAlpha(),
      beta: this.getBeta(),
    };
  }

  getLongerDiagonal(): number {
    return Math.sqrt(
      Math.pow(this.sideLengthA, 2) +
        Math.pow(this.sideLengthB, 2) +
        2 *
          this.sideLengthA *
          this.sideLengthB *
          Math.cos((this.getAlpha() * Math.PI) / 180)
    );
  }

  getShorterDiagonal(): number {
    return Math.sqrt(
      Math.pow(this.sideLengthA, 2) +
        Math.pow(this.sideLengthB, 2) -
        2 *
          this.sideLengthA *
          this.sideLengthB *
          Math.cos((this.getAlpha() * Math.PI) / 180)
    );
  }

  getDiagonals(): ParallelogramDiagonals {
    return {
      longerDiagonal: this.getLongerDiagonal(),
      shorterDiagonal: this.getShorterDiagonal(),
    };
  }
}
