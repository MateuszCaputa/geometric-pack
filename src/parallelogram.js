import { transformRadiansToDegrees } from "./transform.js";

export class Parallelogram {
  constructor(...args) {
    this.validateInput(args);
    this.sideLengthA = args[0];
    this.sideLengthB = args[1];
    this.height = args[2];
  }

  validateInput(args) {
    if (args.length !== 3) {
      throw new Error("Parallelogram constructor takes 3 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side lengths and height must be positive numbers");
    }
  }

  hasNegative([sideLengthA, sideLengthB, height]) {
    return sideLengthA <= 0 || sideLengthB <= 0 || height <= 0;
  }

  getDefinition() {
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

  getCircumference() {
    return this.sideLengthA * 2 + this.sideLengthB * 2;
  }

  getArea() {
    return this.sideLengthB * this.height;
  }

  getAlpha() {
    const radians = Math.asin(this.height / this.sideLengthA);
    return transformRadiansToDegrees(radians);
  }

  getBeta() {
    return 180 - this.getAlpha();
  }

  getAngles() {
    return {
      alpha: this.getAlpha(),
      beta: this.getBeta(),
    };
  }

  getLongerDiagonal() {
    return Math.sqrt(
      Math.pow(this.sideLengthA, 2) +
        Math.pow(this.sideLengthB, 2) -
        2 *
          this.sideLengthA *
          this.sideLengthB *
          Math.cos((this.getAlpha() * Math.PI) / 180)
    );
  }

  getShorterDiagonal() {
    return Math.sqrt(
      Math.pow(this.sideLengthA, 2) +
        Math.pow(this.sideLengthB, 2) +
        2 *
          this.sideLengthA *
          this.sideLengthB *
          Math.cos((this.getAlpha() * Math.PI) / 180)
    );
  }

  getDiagonals() {
    return {
      longerDiagonal: this.getLongerDiagonal(),
      shorterDiagonal: this.getShorterDiagonal(),
    };
  }
}
