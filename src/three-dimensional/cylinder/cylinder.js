export class Cylinder {
  constructor(...args) {
    this.validateInput(args);
    this.radius = args[0];
    this.height = args[1];
  }

  validateInput(args) {
    if (args.length !== 2) {
      throw new Error("Cylinder constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Radius and height must be positive numbers");
    }
  }

  hasNegative([radius, height]) {
    return radius <= 0 || height <= 0;
  }

  getDefinition() {
    return {
      radius: this.radius,
      height: this.height,
      volume: this.getVolume(),
      lateralSurfaceArea: this.getLateralSurfaceArea(),
      baseSurfaceArea: this.getBaseSurfaceArea(),
      totalSurfaceArea: this.getTotalSurfaceArea(),
    };
  }

  getVolume() {
    return Math.PI * Math.pow(this.radius, 2) * this.height;
  }

  getLateralSurfaceArea() {
    return 2 * Math.PI * this.radius * this.height;
  }

  getBaseSurfaceArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getTotalSurfaceArea() {
    return this.getLateralSurfaceArea() + 2 * this.getBaseSurfaceArea();
  }
}
