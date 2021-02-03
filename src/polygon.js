import { transformRadiansToDegrees } from "./transform.js";

export class Polygon {
  constructor(...args) {
    this.validateInput(args);
    this.a = args[0];
    this.n = args[1];
  }

  validateInput(args) {
    if (this.hasNegative(args)) {
      throw new Error("arguments must be a positive numbers");
    }
    if (this.requirement(args)) {
      throw new Error("number of sides 'n' must be a value between 3 and 14");
    }
    if (args.length !== 2) {
      throw new Error("class Polygon must have 2 arguments");
    }
  }

  hasNegative(args) {
    const [a, n] = args;
    return a <= 0 || n <= 0;
  }

  requirement(args) {
    return args[1] < 3 || args[1] > 14;
  }

  polygon() {
    return {
      a: this.a,
      numberOfSides: this.n,

      circumference: this.getCircumference(),
      area: this.getArea(),
      angels: this.getAngles(),
      radiusOfOuterCircle: this.getOuterCircle(),
      radiusOfInnerCircle: this.getInnerCircle(),
    };
  }

  getCircumference() {
    return this.a * this.n;
  }

  getArea() {
    return (
      (1 / 4) * this.n * Math.pow(this.a, 2) * (1 / Math.tan(Math.PI / this.n))
    );
  }

  getAlpha() {
    const radians = ((this.n - 2) * Math.PI) / this.n;
    return transformRadiansToDegrees(radians);
  }

  getBeta() {
    const radians = (2 * Math.PI) / this.n;
    return transformRadiansToDegrees(radians);
  }

  getAngles() {
    return {
      interiorAngle: this.getAlpha(),
      exteriorAngle: this.getBeta(),
    };
  }

  getOuterCircle() {
    return (1 / 2) * this.a * (1 / Math.sin(Math.PI / this.n));
  }

  getInnerCircle() {
    return (1 / 2) * this.a * (1 / Math.tan(Math.PI / this.n));
  }
}
