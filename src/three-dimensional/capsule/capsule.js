export class Capsule {
  constructor(...args) {
    this.validateInput(args);
    this.sideLength = args[0];
    this.radius = args[1];
  }

  validateInput(args) {
    if (args.length !== 2) {
      throw new Error("Capsule constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length and radius must be positive numbers");
    }
  }

  hasNegative([sideLength, radius]) {
    return sideLength <= 0 || radius <= 0;
  }

  getDefinition() {
    return {
      sideLength: this.sideLength,
      radius: this.radius,
      volume: this.getVolume(),
      area: this.getArea(),
      circumference: this.getCircumference(),
    };
  }

  getVolume() {
    return (
      Math.PI *
      Math.pow(this.radius, 2) *
      ((4 / 3) * this.radius + this.sideLength)
    );
  }

  getArea() {
    return 2 * Math.PI * this.radius * (2 * this.radius + this.sideLength);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
