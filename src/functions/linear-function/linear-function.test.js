import { LinearFunction } from "./linear-function";

const firstLinearFunction = new LinearFunction(4, 2);

test("should get 'a' of linear function", () => {
  const result = firstLinearFunction.a;
  const expected = 4;
  expect(result).toBe(expected);
});

test("should get 'b' of linear function", () => {
  const result = firstLinearFunction.b;
  const expected = 2;
  expect(result).toBe(expected);
});

test("should get solution of linear function", () => {
  const result = firstLinearFunction.getSolution();
  const expected = -0.5;
  expect(result).toBe(expected);
});

test("should get monotonicity of linear function", () => {
  const result = firstLinearFunction.getMonotonicity();
  const expected = "increasing";
  expect(result).toBe(expected);
});

test("should get start point of positive range of linear function", () => {
  const result = firstLinearFunction.getPositiveRange()[0];
  const expected = -0.5;
  expect(result).toBe(expected);
});

test("should get end point of positive range of linear function", () => {
  const result = firstLinearFunction.getPositiveRange()[1];
  const expected = Infinity;
  expect(result).toBe(expected);
});

test("should get start point of negative range of linear function", () => {
  const result = firstLinearFunction.getNegativeRange()[0];
  const expected = -Infinity;
  expect(result).toBe(expected);
});

test("should get end point of negative range of linear function", () => {
  const result = firstLinearFunction.getNegativeRange()[1];
  const expected = -0.5;
  expect(result).toBe(expected);
});

// {
//   a: 4,
//   b: 2,
//   solution: -0.5,
//   monotonicity: 'increasing',
//   positiveRange: [ -0.5, Infinity ],
//   negativeRange: [ -Infinity, -0.5 ]
// }
