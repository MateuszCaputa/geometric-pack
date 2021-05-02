export class Cone {
  constructor(...args) {
    this.validateInput(args);
    this.radius = args[0];
    this.height = args[1];
  }

  validateInput(args) {
    if (args.length !== 2) {
      throw new Error("Cone constructor takes 2 arguments");
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
      slantHeight: this.getSlantHeight(),
      volume: this.getVolume(),
      lateralSurfaceArea: this.getLateralSurfaceArea(),
      baseSurfaceArea: this.getBaseSurfaceArea(),
      totalSurfaceArea: this.getTotalSurfaceArea(),
    };
  }

  getSlantHeight() {
    return Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
  }

  getVolume() {
    return (1 / 3) * Math.PI * Math.pow(this.radius, 2) * this.height;
  }

  getLateralSurfaceArea() {
    return Math.PI * this.radius * this.getSlantHeight();
  }

  getBaseSurfaceArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getTotalSurfaceArea() {
    return this.getLateralSurfaceArea() + this.getBaseSurfaceArea();
  }
}
