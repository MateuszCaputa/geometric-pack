import { Rectangle } from "./rectangle";

const firstRectangle = new Rectangle(5, 2);

test("should get length side 'a' of rectangle", () => {
  const result = firstRectangle.sideLengthA;
  const expected = 5;
  expect(result).toBe(expected);
});

test("should get length side 'b' of rectangle", () => {
  const result = firstRectangle.sideLengthB;
  const expected = 2;
  expect(result).toBe(expected);
});

test("should get circumference of rectangle", () => {
  const result = firstRectangle.getCircumference();
  const expected = 14;
  expect(result).toBe(expected);
});

test("should get area of triangle", () => {
  const result = firstRectangle.getArea();
  const expected = 10;
  expect(result).toBe(expected);
});

test("should get diagonal of triangle", () => {
  const result = firstRectangle.getDiagonal();
  const expected = 5.385164807134504;
  expect(result).toBe(expected);
});
