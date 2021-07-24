import { LinearFunctionInequality } from "./linear-function-inequality";

export interface LinearFunctionDefinition {
  a: number;
  b: number;
  solution: number | null;
  monotonicity: string;
  positiveRange: LinearFunctionInequality;
  negativeRange: LinearFunctionInequality;
}
