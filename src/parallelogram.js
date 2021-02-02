import { transformRadiansToDegrees } from "./transform.js";

export class Parallelogram {
  constructor(...args) {
    this.validateInput(args);
    this.a = args[0];
    this.b = args[1];
    this.h = args[2];
  }

  validateInput(args) {
    if (this.hasNegative(args)) {
      throw new Error("arguments must be a positive numbers");
    }
    if (args.length !== 3) {
      throw new Error("class Parallelogram must have 3 arguments");
    }
  }

  hasNegative(args) {
    const [a, b, h] = args;
    return a <= 0 || b <= 0 || h <= 0;
  }

  parallelogram() {
    return {
      a: this.a,
      b: this.b,
      height: this.h,

      circumference: this.getCircumference(),
      area: this.getArea(),
      cornerAngles: this.getAngles(),
      diagonals: this.getDiagonals(),
    };
  }

  getCircumference() {
    return this.a * 2 + this.b * 2;
  }

  getArea() {
    return this.b * this.h;
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
      Math.pow(this.a, 2) +
        Math.pow(this.b, 2) -
        2 * this.a * this.b * Math.cos((this.getAlpha() * Math.PI) / 180)
    );
  }

  getShorterDiagonal() {
    return Math.sqrt(
      Math.pow(this.a, 2) +
        Math.pow(this.b, 2) +
        2 * this.a * this.b * Math.cos((this.getAlpha() * Math.PI) / 180)
    );
  }

  getDiagonals() {
    return {
      p: this.getLongerDiagonal(),
      q: this.getShorterDiagonal(),
    };
  }
}
