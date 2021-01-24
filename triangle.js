class Triangle {
  constructor(...sides) {
    this.validateInput(sides);
    const sortedSides = sides.sort((a, b) => a - b);
    this.a = sortedSides[0];
    this.b = sortedSides[1];
    this.c = sortedSides[2];
  }

  validateInput(sides) {
    if (this.hasNegative(sides)) {
      throw new Error("arguments must be a positive numbers");
    }
    if (sides.length !== 3) {
      throw new Error("class Triangle must have 3 arguments");
    }
    if (!this.isTriangle(sides)) {
      throw new Error("Not a triangle");
    }
  }

  hasNegative(sides) {
    const [a, b, c] = sides;
    return a <= 0 || b <= 0 || c <= 0;
  }

  triangle() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,

      circumference: this.getCircumference(),
      area: this.getArea(),
      rightAngle: this.hasRightAngle(),
      heights: this.getHeights(),
      angles: this.getAngles(),
      radiusOfOuterCircle: this.getOuterCircle(),
      radiusOfInnerCircle: this.getInnerCircle(),
    };
  }

  isTriangle(sides) {
    const [a, b, c] = sides;
    return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
  }

  getCircumference() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const s = this.getCircumference() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  hasRightAngle() {
    return Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2);
  }

  getHeightOfBaseA() {
    return this.getArea() / (0.5 * this.a);
  }

  getHeightOfBaseB() {
    return this.getArea() / (0.5 * this.b);
  }

  getHeightOfBaseC() {
    return this.getArea() / (0.5 * this.c);
  }

  getHeights() {
    return {
      heightOfBaseA: this.getHeightOfBaseA(),
      heightOfBaseB: this.getHeightOfBaseB(),
      heightOfBaseC: this.getHeightOfBaseC(),
    };
  }

  getGamma() {
    const radians = Math.asin((2 * this.getArea()) / (this.a * this.b));
    return transformRadiansToDegrees(radians);
  }

  getBeta() {
    const radians = Math.asin((2 * this.getArea()) / (this.a * this.c));
    return transformRadiansToDegrees(radians);
  }

  getAlpha() {
    const radians = Math.asin((2 * this.getArea()) / (this.b * this.c));
    return transformRadiansToDegrees(radians);
  }

  getAngles() {
    return {
      gamma: this.getGamma(),
      beta: this.getBeta(),
      alpha: this.getAlpha(),
    };
  }

  isIdentical(triangle) {
    return (
      this.a === triangle.a && this.b === triangle.b && this.c === triangle.c
    );
  }

  isCongruent(triangle) {
    return (
      this.getGamma() === triangle.getGamma() &&
      this.getBeta() === triangle.getBeta() &&
      this.getAlpha() === triangle.getAlpha()
    );
  }

  getOuterCircle() {
    return (this.a * this.b * this.c) / (4 * this.getArea());
  }

  getInnerCircle() {
    return this.getArea() / (this.getCircumference() / 2);
  }
}
