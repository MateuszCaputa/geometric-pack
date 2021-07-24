import { GetDefinition } from "../../models/get-definition";
import { QuadraticDefinition } from "./models/quadratic-definition";
import { QuadraticInequalitySolution } from "./models/quadratic-inequality-solution";
import { QuadraticMonotonicity } from "./models/quadratic-monotonicity";
import { QuadraticVertex } from "./models/quadratic-vertex";

export class QuadraticFunction implements GetDefinition<QuadraticDefinition> {
  public a: number;
  public b: number;
  public c: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.a = args[0];
    this.b = args[1];
    this.c = args[2];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 3) {
      throw new Error("QuadraticFunction constructor takes 3 arguments");
    }
    if (args[0] === 0) {
      throw new Error("Coefficient 'a' can't be equal 0");
    }
  }

  getDefinition(): QuadraticDefinition {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      delta: this.getDelta(),
      solutions: this.getSolutions(),
      vertex: this.getVertex(),
      monotonicity: this.getMonotonicity(),
      positiveRange: this.getPositiveRange(),
      negativeRange: this.getNegativeRange(),
    };
  }

  getDelta(): number {
    return Math.pow(this.b, 2) - 4 * this.a * this.c;
  }

  getSolutions(): number[] {
    if (0 < this.getDelta()) {
      const x1 = (-this.b - Math.sqrt(this.getDelta())) / (2 * this.a);
      const x2 = (-this.b + Math.sqrt(this.getDelta())) / (2 * this.a);

      return [x1, x2].sort((a, b) => a - b);
    }
    if (0 === this.getDelta()) {
      const x = (-this.b - Math.sqrt(this.getDelta())) / (2 * this.a);

      return [x];
    }
    return [];
  }

  getVertex(): QuadraticVertex {
    const x = -this.b / (2 * this.a);
    const y = -this.getDelta() / (4 * this.a);

    return {
      x,
      y,
    };
  }

  getMonotonicity(): QuadraticMonotonicity {
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

  getPositiveRange(): QuadraticInequalitySolution {
    const solutions = this.getSolutions();
    const yCoordinate = this.getVertex().y;
    if (solutions.length === 2) {
      if (this.a > 0) {
        return [
          [-Infinity, solutions[0]],
          [solutions[1], Infinity],
        ];
      }
      return [[solutions[0], solutions[1]]];
    }
    if (solutions.length === 1) {
      if (this.a > 0) {
        return [
          [-Infinity, solutions[0]],
          [solutions[1], Infinity],
        ];
      }
      return [];
    }
    if (yCoordinate > 0) {
      return [[-Infinity, Infinity]];
    }
    return [];
  }

  getNegativeRange(): QuadraticInequalitySolution {
    const solutions = this.getSolutions();
    const yCoordinate = this.getVertex().y;
    if (solutions.length === 2) {
      if (this.a > 0) {
        return [[solutions[0], solutions[1]]];
      }
      return [
        [-Infinity, solutions[0]],
        [solutions[1], Infinity],
      ];
    }
    if (solutions.length === 1) {
      if (this.a > 0) {
        return [];
      }
      return [
        [-Infinity, solutions[0]],
        [solutions[1], Infinity],
      ];
    }
    if (yCoordinate > 0) {
      return [];
    }
    return [[-Infinity, Infinity]];
  }
}
