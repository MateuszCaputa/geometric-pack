export class Pyramid {
  constructor(...args) {
    this.validateInput(args);
    this.sideLength = args[0];
    this.height = args[1];
  }

  validateInput(args) {
    if (args.length !== 2) {
      throw new Error("Pyramid constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length and height must be positive numbers");
    }
  }

  hasNegative([sideLength, height]) {
    return sideLength <= 0 || height <= 0;
  }

  getDefinition() {
    return {
      sideLength: this.sideLength,
      height: this.height,
      volume: this.getVolume(),
      slantHeight: this.getSlantHeight(),
      lateralSurfaceArea: this.getLateralSurfaceArea(),
      baseSurfaceArea: this.getBaseSurfaceArea(),
      totalSurfaceArea: this.getTotalSurfaceArea(),
    };
  }

  getVolume() {
    return (1 / 3) * Math.pow(this.sideLength, 2) * this.height;
  }

  getSlantHeight() {
    return Math.sqrt(
      Math.pow(this.height, 2) + (1 / 4) * Math.pow(this.sideLength, 2)
    );
  }

  getLateralSurfaceArea() {
    return (
      this.sideLength *
      Math.sqrt(Math.pow(this.sideLength, 2) + 4 * Math.pow(this.height, 2))
    );
  }

  getBaseSurfaceArea() {
    return Math.pow(this.sideLength, 2);
  }

  getTotalSurfaceArea() {
    return this.getLateralSurfaceArea() + this.getBaseSurfaceArea();
  }
}
