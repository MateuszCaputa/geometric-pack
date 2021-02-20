export class Tube {
  constructor(...args) {
    this.validateInput(args);
    this.outerRadius = args[0];
    this.innerRadius = args[1];
    this.height = args[2];
  }

  validateInput(args) {
    if (args.length !== 3) {
      throw new Error("Tube constructor takes 3 arguments");
    }
    if (args[0] <= args[1]) {
      throw new Error("Outer radius must be bigger number than inner radius");
    }
    if (this.hasNegative(args)) {
      throw new Error("Radiuses and height must be positive numbers");
    }
  }

  hasNegative([outerRadius, innerRadius, height]) {
    return outerRadius <= 0 || innerRadius <= 0 || height <= 0;
  }

  getDefinition() {
    return {
      outerRadius: this.outerRadius,
      innerRadius: this.innerRadius,
      height: this.height,
      outerCircumference: this.getOuterCircumference(),
      innerCircumference: this.getInnerCircumference(),
      ExternalLateralSurfaceArea: this.getExternalLateralSurfaceArea(),
      InternalLateralSurfaceArea: this.getInternalLateralSurfaceArea(),
      outerArea: this.getOuterArea(),
      innerArea: this.getInnerArea(),
      endSurfaceArea: this.getEndSurfaceArea(),
      outerVolume: this.getOuterVolume(),
      innerVolume: this.getInnerVolume(),
      solidVolume: this.getSolidVolume(),
      wallThickness: this.getWallThickness(),
    };
  }

  getOuterCircumference() {
    return 2 * Math.PI * this.outerRadius;
  }

  getInnerCircumference() {
    return 2 * Math.PI * this.innerRadius;
  }

  getExternalLateralSurfaceArea() {
    return 2 * Math.PI * this.outerRadius * this.height;
  }

  getInternalLateralSurfaceArea() {
    return 2 * Math.PI * this.innerRadius * this.height;
  }

  getOuterArea() {
    return Math.PI * Math.pow(this.outerRadius, 2);
  }

  getInnerArea() {
    return Math.PI * Math.pow(this.innerRadius, 2);
  }

  getEndSurfaceArea() {
    return this.getOuterArea() - this.getInnerArea();
  }

  getOuterVolume() {
    return Math.PI * Math.pow(this.outerRadius, 2) * this.height;
  }

  getInnerVolume() {
    return Math.PI * Math.pow(this.innerRadius, 2) * this.height;
  }

  getSolidVolume() {
    return this.getOuterVolume() - this.getInnerVolume();
  }

  getWallThickness() {
    return this.outerRadius - this.innerRadius;
  }
}
