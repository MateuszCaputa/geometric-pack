import { NormalizeResults } from "../../utils/normalize-result";
import { Angle } from "../../utils/angle/angle";
import { isEqual } from "../../utils/is-equal";
import { GetDefinition } from "../../models/get-definition";
import { TriangleDefinition } from "./models/triangle-definition";
import { TriangleHeights } from "./models/triangle-heights";

@NormalizeResults()
export class Triangle implements GetDefinition<TriangleDefinition> {
  public sideLengthA: number;
  public sideLengthB: number;
  public sideLengthC: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    const sortedSides = args.sort((a, b) => a - b);
    this.sideLengthA = sortedSides[0];
    this.sideLengthB = sortedSides[1];
    this.sideLengthC = sortedSides[2];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 3) {
      throw new Error("Triangle constructor takes 3 arguments");
    }
    if (this.hasNonPositive(args)) {
      throw new Error("Side lengths must be positive numbers");
    }
    if (Triangle.isTriangle(args)) {
      throw new Error("Not a triangle");
    }
  }

  private hasNonPositive([
    sideLengthA,
    sideLengthB,
    sideLengthC,
  ]: number[]): boolean {
    return sideLengthA <= 0 || sideLengthB <= 0 || sideLengthC <= 0;
  }

  static isTriangle([
    sideLengthA,
    sideLengthB,
    sideLengthC,
  ]: number[]): boolean {
    return (
      sideLengthA <= 0 ||
      sideLengthB <= 0 ||
      sideLengthC <= 0 ||
      sideLengthA + sideLengthB <= sideLengthC ||
      sideLengthA + sideLengthC <= sideLengthB ||
      sideLengthB + sideLengthC <= sideLengthA
    );
  }

  getDefinition(): TriangleDefinition {
    return {
      sideLengthA: this.sideLengthA,
      sideLengthB: this.sideLengthB,
      sideLengthC: this.sideLengthC,
      circumference: this.getCircumference(),
      area: this.getArea(),
      hasRightAngle: this.hasRightAngle(),
      heights: this.getHeights(),
      alpha: this.getAlpha(),
      beta: this.getBeta(),
      gamma: this.getGamma(),
      outerCircleRadius: this.getOuterCircleRadius(),
      innerCircleRadius: this.getInnerCircleRadius(),
    };
  }

  getCircumference(): number {
    return this.sideLengthA + this.sideLengthB + this.sideLengthC;
  }

  getArea(): number {
    const s = this.getCircumference() / 2;
    return Math.sqrt(
      s *
        (s - this.sideLengthA) *
        (s - this.sideLengthB) *
        (s - this.sideLengthC)
    );
  }

  hasRightAngle(): boolean {
    return (
      Math.pow(this.sideLengthA, 2) + Math.pow(this.sideLengthB, 2) ===
      Math.pow(this.sideLengthC, 2)
    );
  }

  getHeightOfBaseA(): number {
    return this.getArea() / (0.5 * this.sideLengthA);
  }

  getHeightOfBaseB(): number {
    return this.getArea() / (0.5 * this.sideLengthB);
  }

  getHeightOfBaseC(): number {
    return this.getArea() / (0.5 * this.sideLengthC);
  }

  getHeights(): TriangleHeights {
    return {
      heightOfBaseA: this.getHeightOfBaseA(),
      heightOfBaseB: this.getHeightOfBaseB(),
      heightOfBaseC: this.getHeightOfBaseC(),
    };
  }

  getAlpha(): Angle {
    const radians = Math.asin(
      (2 * this.getArea()) / (this.sideLengthB * this.sideLengthC)
    );
    return new Angle(radians);
  }

  getBeta(): Angle {
    const radians = Math.asin(
      (2 * this.getArea()) / (this.sideLengthA * this.sideLengthC)
    );
    return new Angle(radians);
  }

  getGamma(): Angle {
    const radians = Math.asin(
      (2 * this.getArea()) / (this.sideLengthA * this.sideLengthB)
    );
    return new Angle(radians);
  }

  isCongruent(triangle: Triangle): boolean {
    return (
      this.sideLengthA === triangle.sideLengthA &&
      this.sideLengthB === triangle.sideLengthB &&
      this.sideLengthC === triangle.sideLengthC
    );
  }

  isSimilar(triangle: Triangle): boolean {
    return (
      isEqual(
        this.getGamma().originalDegrees,
        triangle.getGamma().originalDegrees
      ) &&
      isEqual(
        this.getBeta().originalDegrees,
        triangle.getBeta().originalDegrees
      ) &&
      isEqual(
        this.getAlpha().originalDegrees,
        triangle.getAlpha().originalDegrees
      )
    );
  }

  getOuterCircleRadius(): number {
    return (
      (this.sideLengthA * this.sideLengthB * this.sideLengthC) /
      (4 * this.getArea())
    );
  }

  getInnerCircleRadius(): number {
    return this.getArea() / (this.getCircumference() / 2);
  }
}
