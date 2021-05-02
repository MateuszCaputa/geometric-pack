export class Circle {
  constructor(...args) {
    this.validateInput(args);
    this.radius = args[0];
  }

  validateInput(args) {
    if (args.length !== 1) {
      throw new Error("Circle constructor takes 1 argument");
    }
    if (this.hasNegative(args[0])) {
      throw new Error("radius must be positive number");
    }
  }

  hasNegative(radius) {
    return radius <= 0;
  }

  getDefinition() {
    return {
      radius: this.radius,
      diameter: this.getDiameter(),
      circumference: this.getCircumference(),
      area: this.getArea(),
    };
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getDiameter() {
    return 2 * this.radius;
  }
}
