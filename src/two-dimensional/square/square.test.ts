import { Square } from "./square";

const firstSquare = new Square(5);

describe("Square", () => {
  test("should get length side", () => {
    const result = firstSquare.sideLength;
    const expected = 5;
    expect(result).toBe(expected);
  });

  test("should get circumference", () => {
    const result = firstSquare.getCircumference();
    const expected = 20;
    expect(result).toBe(expected);
  });

  test("should get area", () => {
    const result = firstSquare.getArea();
    const expected = 25;
    expect(result).toBe(expected);
  });

  test("should get diagonal", () => {
    const result = firstSquare.getDiagonal();
    const expected = 7.0710678118654755;
    expect(result).toBe(expected);
  });

  test("should get outer circle radius", () => {
    const result = firstSquare.getOuterCircleRadius();
    const expected = 3.5355339059327378;
    expect(result).toBe(expected);
  });

  test("should get inner circle radius", () => {
    const result = firstSquare.getInnerCircleRadius();
    const expected = 2.5;
    expect(result).toBe(expected);
  });
});
