import { QuadraticFunction } from "./quadratic-function";

const firstQuadraticFunction = new QuadraticFunction(-4, 4, 1);

test("should get 'a' of QuadraticFunction", () => {
  const result = firstQuadraticFunction.a;
  const expected = -4;
  expect(result).toBe(expected);
});

test("should get 'b' of QuadraticFunction", () => {
  const result = firstQuadraticFunction.b;
  const expected = 4;
  expect(result).toBe(expected);
});

test("should get 'c' of QuadraticFunction", () => {
  const result = firstQuadraticFunction.c;
  const expected = 1;
  expect(result).toBe(expected);
});

test("should get delta of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getDelta();
  const expected = 32;
  expect(result).toBe(expected);
});

test("should get 'x1' solution of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getSolutions()[0];
  const expected = -0.20710678118654757;
  expect(result).toBe(expected);
});

test("should get 'x2' solution of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getSolutions()[1];
  const expected = 1.2071067811865475;
  expect(result).toBe(expected);
});

test("should get 'x' vertex of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getVertex().x;
  const expected = 0.5;
  expect(result).toBe(expected);
});

test("should get 'y' vertex of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getVertex().y;
  const expected = 2;
  expect(result).toBe(expected);
});

test("should get start point of increasing monotonicity of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getMonotonicity().increasing[0];
  const expected = -Infinity;
  expect(result).toBe(expected);
});

test("should get end point of increasing monotonicity of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getMonotonicity().increasing[1];
  const expected = 0.5;
  expect(result).toBe(expected);
});

test("should get start point of decreasing monotonicity of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getMonotonicity().decreasing[0];
  const expected = 0.5;
  expect(result).toBe(expected);
});

test("should get end point of decreasing monotonicity of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getMonotonicity().decreasing[1];
  const expected = Infinity;
  expect(result).toBe(expected);
});

test("should get start point of positive range of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getPositiveRange()[0];
  const expected = -0.20710678118654757;
  expect(result).toBe(expected);
});

test("should get end point of positive range of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getPositiveRange()[1];
  const expected = 1.2071067811865475;
  expect(result).toBe(expected);
});

test("should get start point of first negative range of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getNegativeRange().first[0];
  const expected = -Infinity;
  expect(result).toBe(expected);
});

test("should get end point of first negative range of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getNegativeRange().first[1];
  const expected = -0.20710678118654757;
  expect(result).toBe(expected);
});

test("should get start point of second negative range of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getNegativeRange().second[0];
  const expected = 1.2071067811865475;
  expect(result).toBe(expected);
});

test("should get end point of second negative range of QuadraticFunction", () => {
  const result = firstQuadraticFunction.getNegativeRange().second[1];
  const expected = Infinity;
  expect(result).toBe(expected);
});
