export class Cube {
  constructor(...args) {
    this.validateInput(args);
    this.sideLength = args[0];
  }

  validateInput(args) {
    if (args.length !== 1) {
      throw new Error("Cube constructor takes 1 argument");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length must be positive numbers");
    }
  }

  hasNegative(sideLength) {
    return sideLength <= 0;
  }

  getDefinition() {
    return {
      sideLength: this.sideLength,
      volume: this.getVolume(),
      circumference: this.getCircumference(),
      area: this.getArea(),
      faceDiagonal: this.getFaceDiagonal(),
      solidDiagonal: this.getSolidDiagonal(),
    };
  }

  getVolume() {
    return Math.pow(this.sideLength, 3);
  }

  getCircumference() {
    return 12 * this.sideLength;
  }

  getArea() {
    return 6 * Math.pow(this.sideLength, 2);
  }

  getFaceDiagonal() {
    return this.sideLength * Math.sqrt(2);
  }

  getSolidDiagonal() {
    return this.sideLength * Math.sqrt(3);
  }
}
