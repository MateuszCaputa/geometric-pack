class Circle {
  constructor(...args) {
    this.validateInput(args);
    this.r = args[0];
  }

  validateInput(args) {
    if (this.hasNegative(args)) {
      throw new Error("argument must be a positive number");
    }
    if (args.length !== 1) {
      throw new Error("class Circle must have 1 argument");
    }
  }

  hasNegative(args) {
    const r = args[0];
    return r <= 0;
  }

  circle() {
    return {
      radius: this.r,
      diameter: this.getDiameter(),

      circumference: this.getCircumeference(),
      area: this.getArea(),
    };
  }

  getCircumeference() {
    return 2 * Math.PI * this.r;
  }

  getArea() {
    return Math.PI * Math.pow(this.r, 2);
  }

  getDiameter() {
    return 2 * this.r;
  }
}
