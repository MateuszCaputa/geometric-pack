export class Annulus {
  constructor(...args) {
    this.validateInput(args);
    this.outerRadius = args[0];
    this.innerRadius = args[1];
  }

  validateInput(args) {
    if (args.length !== 2) {
      throw new Error("Annulus constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Radiuses must be positive numbers");
    }
  }

  hasNegative([outerRadius, innerRadius]) {
    return outerRadius <= 0 || innerRadius <= 0;
  }

  getDefinition() {
    return {
      outerRadius: this.outerRadius,
      innerRadius: this.innerRadius,
      outerCircumference: this.getOuterCircumference(),
      innerCircumference: this.getInnerCircumference(),
      outerCircleArea: this.getOuterCircleArea(),
      innerCircleArea: this.getInnerCircleArea(),
      annulusArea: this.getAnnulusArea(),
    };
  }

  getOuterCircumference() {
    return 2 * Math.PI * this.outerRadius;
  }

  getInnerCircumference() {
    return 2 * Math.PI * this.innerRadius;
  }

  getOuterCircleArea() {
    return Math.PI * Math.pow(this.outerRadius, 2);
  }

  getInnerCircleArea() {
    return Math.PI * Math.pow(this.innerRadius, 2);
  }

  getAnnulusArea() {
    return this.getOuterCircleArea() - this.getInnerCircleArea();
  }
}
