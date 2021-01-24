class Square {
  constructor(...sides) {
    this.validateInput(sides);
    this.a = sides[0];
  }

  validateInput(sides) {
    if (this.hasNegative(sides)) {
      throw new Error("arguments must be a positive numbers");
    }
    if (sides.length !== 1) {
      throw new Error("class Square must have 1 argument");
    }
  }

  hasNegative(sides) {
    const a = sides[0];
    return a <= 0;
  }

  square() {
    return {
      a: this.a,

      circumference: this.getCircumeference(),
      area: this.getArea(),
      diagonal: this.getDiagonal(),
      radiusOfOuterCircle: this.getOuterCircle(),
      radiusOfInnerCircle: this.getInnerCircle(),
    };
  }

  getCircumeference() {
    return this.a * 4;
  }

  getArea() {
    return Math.pow(this.a, 2);
  }

  getDiagonal() {
    return Math.sqrt(this.getArea() * 2);
  }

  getOuterCircle() {
    return this.getDiagonal() / 2;
  }

  getInnerCircle() {
    return this.a / 2;
  }
}
