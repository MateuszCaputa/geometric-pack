export class Stadium {
  constructor(...args) {
    this.validateInput(args);
    this.sideLength = args[0];
    this.radius = args[1];
  }

  validateInput(args) {
    if (args.length !== 2) {
      throw new Error("Stadium constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length radius must be positive number");
    }
  }

  hasNegative([sideLength, radius]) {
    return sideLength <= 0 || radius <= 0;
  }

  getDefinition() {
    return {
      sideLength: this.sideLength,
      radius: this.radius,
      circumference: this.getCircumference(),
      area: this.getArea(),
    };
  }

  getCircumference() {
    return 2 * (Math.PI * this.radius + this.sideLength);
  }

  getArea() {
    return (
      Math.PI * Math.pow(this.radius, 2) + 2 * this.radius * this.sideLength
    );
  }
}
