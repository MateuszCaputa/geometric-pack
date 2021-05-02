export class Sphere {
  constructor(...args) {
    this.validateInput(args);
    this.radius = args[0];
  }

  validateInput(args) {
    if (args.length !== 1) {
      throw new Error("Sphere constructor takes 1 argument");
    }
    if (this.hasNegative(args)) {
      throw new Error("Radius must be positive number");
    }
  }

  hasNegative(radius) {
    return radius <= 0;
  }

  getDefinition() {
    return {
      radius: this.radius,
      diameter: this.getDiameter(),
      volume: this.getVolume(),
      circumference: this.getCircumference(),
      area: this.getArea(),
    };
  }

  getVolume() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  getArea() {
    return 4 * Math.PI * Math.pow(this.radius, 2);
  }

  getDiameter() {
    return 2 * this.radius;
  }
}
