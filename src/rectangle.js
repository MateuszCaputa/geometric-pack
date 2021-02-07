export class Rectangle {
  constructor(...args) {
    this.validateInput(args);
    this.sideLengthA = args[0];
    this.sideLengthB = args[1];
  }

  validateInput(args) {
    if (args.length !== 2) {
      throw new Error("Rectangle takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Sides lengths must be positive numbers");
    }
  }

  hasNegative([sideLengthA, sideLengthB]) {
    return sideLengthA <= 0 || sideLengthB <= 0;
  }

  getDefinition() {
    return {
      sideLengthA: this.sideLengthA,
      sideLengthB: this.sideLengthB,
      circumference: this.getCircumference(),
      area: this.getArea(),
      diagonal: this.getDiagonal(),
    };
  }

  getCircumference() {
    return this.sideLengthA * 2 + this.sideLengthB * 2;
  }

  getArea() {
    return this.sideLengthA * this.sideLengthB;
  }

  getDiagonal() {
    return Math.sqrt(
      Math.pow(this.sideLengthA, 2) + Math.pow(this.sideLengthB, 2)
    );
  }
}
