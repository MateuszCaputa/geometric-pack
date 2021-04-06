export class LinearFunction {
  constructor(...args) {
    this.validateInput(args);
    this.a = args[0];
    this.b = args[1];
  }

  validateInput(args) {
    if (args.length !== 2) {
      throw new Error("LinearFunction constructor takes 2 arguments");
    }
  }

  getDefinition() {
    return {
      a: this.a,
      b: this.b,
      solution: this.getSolution(),
      monotonicity: this.getMonotonicity(),
      positiveRange: this.getPositiveRange(),
      negativeRange: this.getNegativeRange(),
    };
  }

  getSolution() {
    if (this.a === 0) {
      if (this.b === 0) {
        return Infinity;
      }
      return null;
    }
    return -(this.b / this.a);
  }

  getMonotonicity() {
    if (this.a > 0) {
      return "increasing";
    }
    if (this.a < 0) {
      return "decreasing";
    }
    return "constant";
  }

  getPositiveRange() {
    const solution = this.getSolution();
    if (this.a > 0) {
      return [solution, Infinity];
    }
    if (this.a < 0) {
      return [-Infinity, solution];
    }
    if (this.b > 0) {
      return [-Infinity, Infinity];
    }
    return [];
  }

  getNegativeRange() {
    const solution = this.getSolution();
    if (this.a > 0) {
      return [-Infinity, solution];
    }
    if (this.a < 0) {
      return [solution, Infinity];
    }
    if (this.b < 0) {
      return [-Infinity, Infinity];
    }
    return [];
  }
}
