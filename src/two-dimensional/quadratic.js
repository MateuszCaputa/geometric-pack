export class Quadratic {
  constructor(...args) {
    this.validateInput(args);
    this.a = args[0];
    this.b = args[1];
    this.c = args[2];
  }

  validateInput(args) {
    if (args.length !== 3) {
      throw new Error("Quadratic constructor takes 3 arguments");
    }
  }

  getDefinition() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      delta: this.getDelta(),
      solutions: this.getSolutions(),
      vertex: this.getVertex(),
      monotonicity: this.getMonotonicity(),
    };
  }

  getDelta() {
    return Math.pow(this.b, 2) - 4 * this.a * this.c;
  }

  getSolutions() {
    if (0 < this.getDelta()) {
      const x1 = (-this.b - Math.sqrt(this.getDelta())) / (2 * this.a);
      const x2 = (-this.b + Math.sqrt(this.getDelta())) / (2 * this.a);

      return [x1, x2];
    }
    if (0 === this.getDelta()) {
      const x = (-this.b - Math.sqrt(this.getDelta())) / (2 * this.a);

      return [x];
    }
    return [];
  }

  getVertex() {
    const x = -this.b / (2 * this.a);
    const y = -this.getDelta() / (4 * this.a);

    return {
      x,
      y,
    };
  }

  getMonotonicity() {
    const p = this.getVertex().x;
    const leftRange = [-Infinity, p];
    const rightRange = [p, Infinity];
    if (this.a > 0) {
      return {
        increasing: rightRange,
        decreasing: leftRange,
      };
    }
    return {
      increasing: leftRange,
      decreasing: rightRange,
    };
  }
}
