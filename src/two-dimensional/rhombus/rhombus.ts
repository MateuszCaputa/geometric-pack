import { transformRadiansToDegrees } from "../../utils/transform";
import { RhombusAngles } from "./models/rhombus-angles";
import { RhombusDefinition } from "./models/rhombus-definition";
import { RhombusDiagonals } from "./models/rhombus-diagonals";

export class Rhombus {
  public sideLength: number;
  public height: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.sideLength = args[0];
    this.height = args[1];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 2) {
      throw new Error("Rhombus constructor takes 2 arguments");
    }
    if (args[1] > args[0]) {
      throw new Error("Height must be less than or equal to the side length");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length and height must be positive numbers");
    }
  }

  private hasNegative([sideLength, height]: number[]): boolean {
    return sideLength <= 0 || height <= 0;
  }

  getDefinition(): RhombusDefinition {
    return {
      sideLength: this.sideLength,
      height: this.height,
      circumference: this.getCircumference(),
      area: this.getArea(),
      cornerAngles: this.getAngles(),
      diagonals: this.getDiagonals(),
    };
  }

  getCircumference(): number {
    return this.sideLength * 4;
  }

  getArea(): number {
    return this.sideLength * this.height;
  }

  getAlpha(): number {
    const radians = Math.asin(this.height / this.sideLength);
    return transformRadiansToDegrees(radians);
  }

  getBeta(): number {
    return 180 - this.getAlpha();
  }

  getAngles(): RhombusAngles {
    return {
      alpha: this.getAlpha(),
      beta: this.getBeta(),
    };
  }

  getLongerDiagonal(): number {
    return Math.sqrt(
      2 * Math.pow(this.sideLength, 2) +
        2 *
          Math.pow(this.sideLength, 2) *
          Math.cos((this.getAlpha() * Math.PI) / 180)
    );
  }

  getShorterDiagonal(): number {
    return Math.sqrt(
      2 * Math.pow(this.sideLength, 2) -
        2 *
          Math.pow(this.sideLength, 2) *
          Math.cos((this.getAlpha() * Math.PI) / 180)
    );
  }

  getDiagonals(): RhombusDiagonals {
    return {
      longerDiagonal: this.getLongerDiagonal(),
      shorterDiagonal: this.getShorterDiagonal(),
    };
  }
}
