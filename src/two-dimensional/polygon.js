import { transformRadiansToDegrees } from "../utils/transform.js";

export class Polygon {
  constructor(...args) {
    this.validateInput(args);
    this.sideLength = args[0];
    this.vertexCount = args[1];
  }

  validateInput(args) {
    if (args.length !== 2) {
      throw new Error("Polygon constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length and vertex count must be positive numbers");
    }
    if (this.requirement(args[1])) {
      throw new Error("Vertex count must be between 3 and 14");
    }
  }

  hasNegative([sideLength, vertexCount]) {
    return sideLength <= 0 || vertexCount <= 0;
  }

  requirement(vertexCount) {
    return vertexCount < 3 || vertexCount > 14;
  }

  getDefinition() {
    return {
      sideLength: this.sideLength,
      vertexCount: this.vertexCount,
      circumference: this.getCircumference(),
      area: this.getArea(),
      angels: this.getAngles(),
      outerCircleRadius: this.getOuterCircleRadius(),
      innerCircleRadius: this.getInnerCircleRadius(),
    };
  }

  getCircumference() {
    return this.sideLength * this.vertexCount;
  }

  getArea() {
    return (
      (1 / 4) *
      this.vertexCount *
      Math.pow(this.sideLength, 2) *
      (1 / Math.tan(Math.PI / this.vertexCount))
    );
  }

  getInteriorAngle() {
    const radians = ((this.vertexCount - 2) * Math.PI) / this.vertexCount;
    return transformRadiansToDegrees(radians);
  }

  getExteriorAngle() {
    const radians = (2 * Math.PI) / this.vertexCount;
    return transformRadiansToDegrees(radians);
  }

  getAngles() {
    return {
      interiorAngle: this.getInteriorAngle(),
      exteriorAngle: this.getExteriorAngle(),
    };
  }

  getOuterCircleRadius() {
    return (
      (1 / 2) * this.sideLength * (1 / Math.sin(Math.PI / this.vertexCount))
    );
  }

  getInnerCircleRadius() {
    return (
      (1 / 2) * this.sideLength * (1 / Math.tan(Math.PI / this.vertexCount))
    );
  }
}
