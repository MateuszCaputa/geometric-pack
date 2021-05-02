import { Stadium } from "./stadium";

const firstStadium = new Stadium(4, 2);

test("should get side length of stadium", () => {
  const result = firstStadium.sideLength;
  const expected = 4;
  expect(result).toBe(expected);
});

test("should get radius of stadium", () => {
  const result = firstStadium.radius;
  const expected = 2;
  expect(result).toBe(expected);
});

test("should get circumference of stadium", () => {
  const result = firstStadium.getCircumference();
  const expected = 20.566370614359172;
  expect(result).toBe(expected);
});

test("should get area of stadium", () => {
  const result = firstStadium.getArea();
  const expected = 28.566370614359172;
  expect(result).toBe(expected);
});
