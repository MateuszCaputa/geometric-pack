import { Square } from "./square";

const firstSquare = new Square(5);

test("should get length side of square", () => {
  const result = firstSquare.sideLength;
  const expected = 5;
  expect(result).toBe(expected);
});

test("should get circumference of square", () => {
  const result = firstSquare.getCircumference();
  const expected = 20;
  expect(result).toBe(expected);
});

test("should get area of square", () => {
  const result = firstSquare.getArea();
  const expected = 25;
  expect(result).toBe(expected);
});

test("should get diagonal of square", () => {
  const result = firstSquare.getDiagonal();
  const expected = 7.0710678118654755;
  expect(result).toBe(expected);
});

test("should get outer circle radius of square", () => {
  const result = firstSquare.getOuterCircleRadius();
  const expected = 3.5355339059327378;
  expect(result).toBe(expected);
});

test("should get inner circle radius of square", () => {
  const result = firstSquare.getInnerCircleRadius();
  const expected = 2.5;
  expect(result).toBe(expected);
});
