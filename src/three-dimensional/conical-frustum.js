export class ConicalFrustum {
  constructor(...args) {
    this.validateInput(args);
    this.radius1 = args[0];
    this.radius2 = args[1];
    this.height = args[2];
  }

  validateInput(args) {
    if (args.length !== 3) {
      throw new Error("ConicalFrustum constructor takes 3 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Radiuses and height must be positive numbers");
    }
  }

  hasNegative([radius1, radius2, height]) {
    return radius1 <= 0 || radius2 <= 0 || height <= 0;
  }

  getDefinition() {
    return {
      radius1: this.radius1,
      radius2: this.radius2,
      height: this.height,
      slantHeight: this.getSlantHeight(),
      volume: this.getVolume(),
      lateralSurfaceArea: this.getLateralSurfaceArea(),
      topSurfaceArea: this.getTopSurfaceArea(),
      baseSurfaceArea: this.getBaseSurfaceArea(),
      totalSurfaceArea: this.getTotalSurfaceArea(),
    };
  }

  getSlantHeight() {
    return Math.sqrt(
      Math.pow(this.radius1 - this.radius2, 2) + Math.pow(this.height, 2)
    );
  }

  getVolume() {
    return (
      (1 / 3) *
      Math.PI *
      this.height *
      (Math.pow(this.radius1, 2) +
        Math.pow(this.radius2, 2) +
        this.radius1 * this.radius2)
    );
  }

  getLateralSurfaceArea() {
    return Math.PI * (this.radius1 + this.radius2) * this.getSlantHeight();
  }

  getTopSurfaceArea() {
    return Math.PI * Math.pow(this.radius1, 2);
  }

  getBaseSurfaceArea() {
    return Math.PI * Math.pow(this.radius2, 2);
  }

  getTotalSurfaceArea() {
    return (
      this.getLateralSurfaceArea() +
      this.getTopSurfaceArea() +
      this.getBaseSurfaceArea()
    );
  }
}
