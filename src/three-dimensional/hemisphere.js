export class Hemisphere {
  constructor(...args) {
    this.validateInput(args);
    this.radius = args[0];
  }

  validateInput(args) {
    if (args.length !== 1) {
      throw new Error("Hemisphere constructor takes 1 argument");
    }
    if (this.hasNegative(args[0])) {
      throw new Error("Radius must be positive number");
    }
  }

  hasNegative(radius) {
    return radius <= 0;
  }

  getDefinition() {
    return {
      radius: this.radius,
      volume: this.getVolume(),
      circumference: this.getCircumference(),
      curvedSurfaceArea: this.getCurvedSurfaceArea(),
      baseSurfaceArea: this.getBaseSurfaceArea(),
      totalSurfaceArea: this.getTotalSurfaceArea(),
    };
  }

  getVolume() {
    return (2 / 3) * Math.PI * Math.pow(this.radius, 3);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  getCurvedSurfaceArea() {
    return 2 * Math.PI * Math.pow(this.radius, 2);
  }

  getBaseSurfaceArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getTotalSurfaceArea() {
    return this.getCurvedSurfaceArea() + this.getBaseSurfaceArea();
  }
}
