import { transformRadiansToDegrees } from "../../utils/transform.js";

export class Triangle {
  constructor(...args) {
    this.validateInput(args);
    const sortedSides = args.sort((a, b) => a - b);
    this.sideLengthA = sortedSides[0];
    this.sideLengthB = sortedSides[1];
    this.sideLengthC = sortedSides[2];
  }

  validateInput(args) {
    if (args.length !== 3) {
      throw new Error("Triangle constructor takes 3 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side lengths must be positive numbers");
    }
    if (this.isTriangle(args)) {
      throw new Error("Not a triangle");
    }
  }

  hasNegative([sideLengthA, sideLengthB, sideLengthC]) {
    return sideLengthA <= 0 || sideLengthB <= 0 || sideLengthC <= 0;
  }

  isTriangle([sideLengthA, sideLengthB, sideLengthC]) {
    return (
      sideLengthA <= 0 ||
      sideLengthB <= 0 ||
      sideLengthC <= 0 ||
      sideLengthA + sideLengthB <= sideLengthC ||
      sideLengthA + sideLengthC <= sideLengthB ||
      sideLengthB + sideLengthC <= sideLengthA
    );
  }

  getDefinition() {
    return {
      sideLengthA: this.sideLengthA,
      sideLengthB: this.sideLengthB,
      sideLengthC: this.sideLengthC,
      circumference: this.getCircumference(),
      area: this.getArea(),
      rightAngle: this.hasRightAngle(),
      heights: this.getHeights(),
      angles: this.getAngles(),
      outerCircleRadius: this.getOuterCircleRadius(),
      innerCircleRadius: this.getInnerCircleRadius(),
    };
  }

  getCircumference() {
    return this.sideLengthA + this.sideLengthB + this.sideLengthC;
  }

  getArea() {
    const s = this.getCircumference() / 2;
    return Math.sqrt(
      s *
        (s - this.sideLengthA) *
        (s - this.sideLengthB) *
        (s - this.sideLengthC)
    );
  }

  hasRightAngle() {
    return (
      Math.pow(this.sideLengthA, 2) + Math.pow(this.sideLengthB, 2) ===
      Math.pow(this.sideLengthC, 2)
    );
  }

  getHeightOfBaseA() {
    return this.getArea() / (0.5 * this.sideLengthA);
  }

  getHeightOfBaseB() {
    return this.getArea() / (0.5 * this.sideLengthB);
  }

  getHeightOfBaseC() {
    return this.getArea() / (0.5 * this.sideLengthC);
  }

  getHeights() {
    return {
      heightOfBaseA: this.getHeightOfBaseA(),
      heightOfBaseB: this.getHeightOfBaseB(),
      heightOfBaseC: this.getHeightOfBaseC(),
    };
  }

  getGamma() {
    const radians = Math.asin(
      (2 * this.getArea()) / (this.sideLengthA * this.sideLengthB)
    );
    return transformRadiansToDegrees(radians);
  }

  getBeta() {
    const radians = Math.asin(
      (2 * this.getArea()) / (this.sideLengthA * this.sideLengthC)
    );
    return transformRadiansToDegrees(radians);
  }

  getAlpha() {
    const radians = Math.asin(
      (2 * this.getArea()) / (this.sideLengthB * this.sideLengthC)
    );
    return transformRadiansToDegrees(radians);
  }

  getAngles() {
    return {
      gamma: this.getGamma(),
      beta: this.getBeta(),
      alpha: this.getAlpha(),
    };
  }

  isCongruent(triangle) {
    return (
      this.sideLengthA === triangle.sideLengthA &&
      this.sideLengthB === triangle.sideLengthB &&
      this.sideLengthC === triangle.sideLengthC
    );
  }

  isSimilar(triangle) {
    return (
      this.getGamma() === triangle.getGamma() &&
      this.getBeta() === triangle.getBeta() &&
      this.getAlpha() === triangle.getAlpha()
    );
  }

  getOuterCircleRadius() {
    return (
      (this.sideLengthA * this.sideLengthB * this.sideLengthC) /
      (4 * this.getArea())
    );
  }

  getInnerCircleRadius() {
    return this.getArea() / (this.getCircumference() / 2);
  }
}
