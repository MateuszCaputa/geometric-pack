import { Triangle } from "./triangle";

const firstTriangle = new Triangle(5, 3, 4);
const secondTriangle = new Triangle(5, 3, 4);

test("should get length side 'a' of triangle", () => {
  const result = firstTriangle.sideLengthA;
  const expected = 3;
  expect(result).toBe(expected);
});

test("should get length side 'b' of triangle", () => {
  const result = firstTriangle.sideLengthB;
  const expected = 4;
  expect(result).toBe(expected);
});

test("should get length side 'c' of triangle", () => {
  const result = firstTriangle.sideLengthC;
  const expected = 5;
  expect(result).toBe(expected);
});

test("should get circumference of triangle", () => {
  const result = firstTriangle.getCircumference();
  const expected = 12;
  expect(result).toBe(expected);
});

test("should get area of triangle", () => {
  const result = firstTriangle.getArea();
  const expected = 6;
  expect(result).toBe(expected);
});

test("should tell if there is right angle inside triangle", () => {
  const result = firstTriangle.hasRightAngle();
  const expected = true;
  expect(result).toBe(expected);
});

test("should get height of base 'a' of triangle", () => {
  const result = firstTriangle.getHeightOfBaseA();
  const expected = 4;
  expect(result).toBe(expected);
});

test("should get height of base 'b' of triangle", () => {
  const result = firstTriangle.getHeightOfBaseB();
  const expected = 3;
  expect(result).toBe(expected);
});

test("should get height of base 'c' of triangle", () => {
  const result = firstTriangle.getHeightOfBaseC();
  const expected = 2.4;
  expect(result).toBe(expected);
});

test("should get gamma angle of triangle", () => {
  const result = firstTriangle.getGamma();
  const expected = 90;
  expect(result).toBe(expected);
});

test("should get beta angle of triangle", () => {
  const result = firstTriangle.getBeta();
  const expected = 53.13010235415598;
  expect(result).toBe(expected);
});

test("should get alpha angle of triangle", () => {
  const result = firstTriangle.getAlpha();
  const expected = 36.86989764584402;
  expect(result).toBe(expected);
});

test("should get outer circle radius of triangle", () => {
  const result = firstTriangle.getOuterCircleRadius();
  const expected = 2.5;
  expect(result).toBe(expected);
});

test("should get inner circle radius of triangle", () => {
  const result = firstTriangle.getInnerCircleRadius();
  const expected = 1;
  expect(result).toBe(expected);
});

test("should tell if first Triangle is congruent to second Triangle", () => {
  const result = firstTriangle.isCongruent(secondTriangle);
  const expected = true;
  expect(result).toBe(expected);
});

test("should tell if second Triangle is identical to first Triangle", () => {
  const result = secondTriangle.isCongruent(firstTriangle);
  const expected = true;
  expect(result).toBe(expected);
});
