class Rectangle {
  constructor(...sides) {
    this.validateInput(sides);
    this.a = sides[0];
    this.b = sides[1];
  }

  validateInput(sides) {
    if (this.hasNegative(sides)) {
      throw new Error("arguments must be a positive numbers");
    }
    if (sides.length !== 2) {
      throw new Error("class Rectangle must have 2 arguments");
    }
  }

  hasNegative(sides) {
    const [a, b] = sides;
    return a <= 0 || b <= 0;
  }

  rectangle() {
    return {
      a: this.a,
      b: this.b,

      circumference: this.getCircumeference(),
      area: this.getArea(),
      diagonal: this.getDiagonal(),
    };
  }

  getCircumeference() {
    return this.a * 2 + this.b * 2;
  }

  getArea() {
    return this.a * this.b;
  }

  getDiagonal() {
    return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
  }
}
