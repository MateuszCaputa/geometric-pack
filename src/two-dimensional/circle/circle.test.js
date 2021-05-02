import { Circle } from "./circle";

const firstCircle = new Circle(7);

test("should get radius of circle", () => {
  const result = firstCircle.radius;
  const expected = 7;
  expect(result).toBe(expected);
});

test("should get diameter of circle", () => {
  const result = firstCircle.getDiameter();
  const expected = 14;
  expect(result).toBe(expected);
});

test("should get circumference of circle", () => {
  const result = firstCircle.getCircumference();
  const expected = 43.982297150257104;
  expect(result).toBe(expected);
});

test("should get area of circle", () => {
  const result = firstCircle.getArea();
  const expected = 153.93804002589985;
  expect(result).toBe(expected);
});
