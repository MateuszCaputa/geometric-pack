import { transformRadiansToDegrees } from "./transform.js";

export class Rhombus {
  constructor(...args) {
    this.validateInput(args);
    this.sideLength = args[0];
    this.height = args[1];
  }

  validateInput(args) {
    if (args.length !== 2) {
      throw new Error("Rhombus constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length and height must be positive numbers");
    }
  }

  hasNegative([sideLength, height]) {
    return sideLength <= 0 || height <= 0;
  }

  getDefinition() {
    return {
      sideLength: this.sideLength,
      height: this.height,
      circumference: this.getCircumference(),
      area: this.getArea(),
      cornerAngles: this.getAngles(),
      diagonals: this.getDiagonals(),
    };
  }

  getCircumference() {
    return this.sideLength * 4;
  }

  getArea() {
    return this.sideLength * this.height;
  }

  getAlpha() {
    const radians = Math.asin(this.height / this.sideLength);
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
      2 * Math.pow(this.sideLength, 2) +
        2 *
          Math.pow(this.sideLength, 2) *
          Math.cos((this.getAlpha() * Math.PI) / 180)
    );
  }

  getShorterDiagonal() {
    return Math.sqrt(
      2 * Math.pow(this.sideLength, 2) -
        2 *
          Math.pow(this.sideLength, 2) *
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
