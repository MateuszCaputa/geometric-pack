import { transformRadiansToDegrees } from "./transform.js";

export class Rhombus {
  constructor(...args) {
    this.validateInput(args);
    this.a = args[0];
    this.h = args[1];
  }

  validateInput(args) {
    if (this.hasNegative(args)) {
      throw new Error("arguments must be a positive numbers");
    }
    if (args.length !== 2) {
      throw new Error("class Rhombus must have 2 arguments");
    }
  }

  hasNegative(args) {
    const [a, h] = args;
    return a <= 0 || h <= 0;
  }

  rhombus() {
    return {
      a: this.a,
      height: this.h,

      circumference: this.getCircumference(),
      area: this.getArea(),
      cornerAngles: this.getAngles(),
      diagonals: this.getDiagonals(),
    };
  }

  getCircumference() {
    return this.a * 4;
  }

  getArea() {
    return this.a * this.h;
  }

  getAlpha() {
    const radians = Math.asin(this.h / this.a);
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
      2 * Math.pow(this.a, 2) +
        2 * Math.pow(this.a, 2) * Math.cos((this.getAlpha() * Math.PI) / 180)
    );
  }

  getShorterDiagonal() {
    return Math.sqrt(
      2 * Math.pow(this.a, 2) -
        2 * Math.pow(this.a, 2) * Math.cos((this.getAlpha() * Math.PI) / 180)
    );
  }

  getDiagonals() {
    return {
      p: this.getLongerDiagonal(),
      q: this.getShorterDiagonal(),
    };
  }
}
