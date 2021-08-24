import { LinearFunction } from "./linear-function";

const firstLinearFunction = new LinearFunction(4, 2);

describe("LinearFunction", () => {
  test("should get 'a'", () => {
    const result = firstLinearFunction.a;
    const expected = 4;
    expect(result).toBe(expected);
  });

  test("should get 'b'", () => {
    const result = firstLinearFunction.b;
    const expected = 2;
    expect(result).toBe(expected);
  });

  test("should get solution", () => {
    const result = firstLinearFunction.getSolution();
    const expected = -0.5;
    expect(result).toBe(expected);
  });

  test("should get monotonicity", () => {
    const result = firstLinearFunction.getMonotonicity();
    const expected = "increasing";
    expect(result).toBe(expected);
  });

  test("should get start point of positive range", () => {
    const result = firstLinearFunction.getPositiveRange()[0];
    const expected = -0.5;
    expect(result).toBe(expected);
  });

  test("should get end point of positive range", () => {
    const result = firstLinearFunction.getPositiveRange()[1];
    const expected = Infinity;
    expect(result).toBe(expected);
  });

  test("should get start point of negative range", () => {
    const result = firstLinearFunction.getNegativeRange()[0];
    const expected = -Infinity;
    expect(result).toBe(expected);
  });

  test("should get end point of negative range", () => {
    const result = firstLinearFunction.getNegativeRange()[1];
    const expected = -0.5;
    expect(result).toBe(expected);
  });
});
