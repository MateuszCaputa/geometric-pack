import { Parallelogram } from "./parallelogram";

const firstParallelogram = new Parallelogram(10, 12, 8);

describe("Parallelogram", () => {
  test("should get length side 'a'", () => {
    const result = firstParallelogram.sideLengthA;
    const expected = 10;
    expect(result).toBe(expected);
  });

  test("should get length side 'b'", () => {
    const result = firstParallelogram.sideLengthB;
    const expected = 12;
    expect(result).toBe(expected);
  });

  test("should get height", () => {
    const result = firstParallelogram.height;
    const expected = 8;
    expect(result).toBe(expected);
  });

  test("should get circumference", () => {
    const result = firstParallelogram.getCircumference();
    const expected = 44;
    expect(result).toBe(expected);
  });

  test("should get area", () => {
    const result = firstParallelogram.getArea();
    const expected = 96;
    expect(result).toBe(expected);
  });

  test("should get alpha angle", () => {
    const result = firstParallelogram.getAlpha();
    const expected = 53.13010235415598;
    expect(result).toBe(expected);
  });

  test("should get beta angle", () => {
    const result = firstParallelogram.getBeta();
    const expected = 126.86989764584402;
    expect(result).toBe(expected);
  });

  test("should get longer diagonal", () => {
    const result = firstParallelogram.getLongerDiagonal();
    const expected = 19.697715603592208;
    expect(result).toBe(expected);
  });

  test("should get shorter diagonal", () => {
    const result = firstParallelogram.getShorterDiagonal();
    const expected = 10;
    expect(result).toBe(expected);
  });
});
