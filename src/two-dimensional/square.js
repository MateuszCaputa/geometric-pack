export class Square {
  constructor(...args) {
    this.validateInput(args);
    this.sideLength = args[0];
  }

  validateInput(args) {
    if (args.length !== 1) {
      throw new Error("Square constructor takes 1 argument");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length must be positive number");
    }
  }

  hasNegative([sideLength]) {
    return sideLength <= 0;
  }

  getDefinition() {
    return {
      sideLength: this.sideLength,
      circumference: this.getCircumference(),
      area: this.getArea(),
      diagonal: this.getDiagonal(),
      outerCircleRadius: this.getOuterCircleRadius(),
      innerCircleRadius: this.getInnerCircleRadius(),
    };
  }

  getCircumference() {
    return this.sideLength * 4;
  }

  getArea() {
    return Math.pow(this.sideLength, 2);
  }

  getDiagonal() {
    return Math.sqrt(this.getArea() * 2);
  }

  getOuterCircleRadius() {
    return this.getDiagonal() / 2;
  }

  getInnerCircleRadius() {
    return this.sideLength / 2;
  }
}
