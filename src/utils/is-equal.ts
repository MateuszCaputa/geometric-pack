export const isEqual = (a: number, b: number): boolean =>
  Math.abs(a - b.valueOf()) < Number.EPSILON;
