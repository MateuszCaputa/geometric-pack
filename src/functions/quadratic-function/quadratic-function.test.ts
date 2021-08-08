import { QuadraticRange } from "./models/quadratic-range";
import { QuadraticFunction } from "./quadratic-function";

const firstQuadraticFunction = new QuadraticFunction(-4, 4, 1);

describe("QuadraticFunction", () => {
  test("should get 'a'", () => {
    const result = firstQuadraticFunction.a;
    const expected = -4;
    expect(result).toBe(expected);
  });

  test("should get 'b'", () => {
    const result = firstQuadraticFunction.b;
    const expected = 4;
    expect(result).toBe(expected);
  });

  test("should get 'c'", () => {
    const result = firstQuadraticFunction.c;
    const expected = 1;
    expect(result).toBe(expected);
  });

  test("should get delta", () => {
    const result = firstQuadraticFunction.getDelta();
    const expected = 32;
    expect(result).toBe(expected);
  });

  test("should get 'x1' solution", () => {
    const result = firstQuadraticFunction.getSolutions()[0];
    const expected = -0.20710678118654757;
    expect(result).toBe(expected);
  });

  test("should get 'x2' solution", () => {
    const result = firstQuadraticFunction.getSolutions()[1];
    const expected = 1.2071067811865475;
    expect(result).toBe(expected);
  });

  test("should get 'x' vertex", () => {
    const result = firstQuadraticFunction.getVertex().x;
    const expected = 0.5;
    expect(result).toBe(expected);
  });

  test("should get 'y' vertex", () => {
    const result = firstQuadraticFunction.getVertex().y;
    const expected = 2;
    expect(result).toBe(expected);
  });

  test("should get start point of increasing monotonicity", () => {
    const result = firstQuadraticFunction.getMonotonicity().increasing[0];
    const expected = -Infinity;
    expect(result).toBe(expected);
  });

  test("should get end point of increasing monotonicity", () => {
    const result = firstQuadraticFunction.getMonotonicity().increasing[1];
    const expected = 0.5;
    expect(result).toBe(expected);
  });

  test("should get start point of decreasing monotonicity", () => {
    const result = firstQuadraticFunction.getMonotonicity().decreasing[0];
    const expected = 0.5;
    expect(result).toBe(expected);
  });

  test("should get end point of decreasing monotonicity", () => {
    const result = firstQuadraticFunction.getMonotonicity().decreasing[1];
    const expected = Infinity;
    expect(result).toBe(expected);
  });

  test("should get start point of positive range", () => {
    const data = firstQuadraticFunction.getPositiveRange() as [QuadraticRange];
    const result = data[0][0];
    const expected = -0.20710678118654757;
    expect(result).toBe(expected);
  });

  test("should get end point of positive range", () => {
    const data = firstQuadraticFunction.getPositiveRange() as [QuadraticRange];
    const result = data[0][1];
    const expected = 1.2071067811865475;
    expect(result).toBe(expected);
  });

  test("should get start point of first negative range", () => {
    const data = firstQuadraticFunction.getNegativeRange() as [
      QuadraticRange,
      QuadraticRange
    ];
    const result = data[0][0];
    const expected = -Infinity;
    expect(result).toBe(expected);
  });

  test("should get end point of first negative range", () => {
    const data = firstQuadraticFunction.getNegativeRange() as [
      QuadraticRange,
      QuadraticRange
    ];
    const result = data[0][1];
    const expected = -0.20710678118654757;
    expect(result).toBe(expected);
  });

  test("should get start point of second negative range", () => {
    const data = firstQuadraticFunction.getNegativeRange() as [
      QuadraticRange,
      QuadraticRange
    ];
    const result = data[1][0];
    const expected = 1.2071067811865475;
    expect(result).toBe(expected);
  });

  test("should get end point of second negative range", () => {
    const data = firstQuadraticFunction.getNegativeRange() as [
      QuadraticRange,
      QuadraticRange
    ];
    const result = data[1][1];
    const expected = Infinity;
    expect(result).toBe(expected);
  });
});
