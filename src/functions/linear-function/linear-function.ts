import { NormalizeResults } from "../../utils/normalize-result";
import { GetDefinition } from "../../models/get-definition";
import { LinearFunctionDefinition } from "./models/linear-function-definition";
import { LinearFunctionInequality } from "./models/linear-function-inequality";

@NormalizeResults()
export class LinearFunction implements GetDefinition<LinearFunctionDefinition> {
  public a: number;
  public b: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.a = args[0];
    this.b = args[1];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 2) {
      throw new Error("LinearFunction constructor takes 2 arguments");
    }
  }

  getDefinition(): LinearFunctionDefinition {
    return {
      a: this.a,
      b: this.b,
      solution: this.getSolution(),
      monotonicity: this.getMonotonicity(),
      positiveRange: this.getPositiveRange(),
      negativeRange: this.getNegativeRange(),
    };
  }

  getSolution(): number | null {
    if (this.a === 0) {
      if (this.b === 0) {
        return Infinity;
      }
      return null;
    }
    return -(this.b / this.a);
  }

  getMonotonicity(): string {
    if (this.a > 0) {
      return "increasing";
    }
    if (this.a < 0) {
      return "decreasing";
    }
    return "constant";
  }

  getPositiveRange(): LinearFunctionInequality {
    const solution = this.getSolution();
    if (solution !== null) {
      if (this.a > 0) {
        return [solution, Infinity];
      }
      return [-Infinity, solution];
    }
    if (this.b > 0) {
      return [-Infinity, Infinity];
    }
    return [];
  }

  getNegativeRange(): LinearFunctionInequality {
    const solution = this.getSolution();
    if (solution !== null) {
      if (this.a > 0) {
        return [-Infinity, solution];
      }
      return [solution, Infinity];
    }
    if (this.b < 0) {
      return [-Infinity, Infinity];
    }
    return [];
  }
}
