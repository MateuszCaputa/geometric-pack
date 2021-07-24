import { QuadraticInequalitySolution } from "./quadratic-inequality-solution";
import { QuadraticMonotonicity } from "./quadratic-monotonicity";
import { QuadraticVertex } from "./quadratic-vertex";

export interface QuadraticDefinition {
  a: number;
  b: number;
  c: number;
  delta: number;
  solutions: number[];
  vertex: QuadraticVertex;
  monotonicity: QuadraticMonotonicity;
  positiveRange: QuadraticInequalitySolution;
  negativeRange: QuadraticInequalitySolution;
}
