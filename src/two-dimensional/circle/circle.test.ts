import { Circle } from "./circle";

const firstCircle = new Circle(7);

describe("Circle", () => {
  test("should get radius", () => {
    const result = firstCircle.radius;
    const expected = 7;
    expect(result).toBe(expected);
  });

  test("should get diameter", () => {
    const result = firstCircle.getDiameter();
    const expected = 14;
    expect(result).toBe(expected);
  });

  test("should get circumference", () => {
    const result = firstCircle.getCircumference();
    const expected = 43.982297150257;
    expect(result).toBe(expected);
  });

  test("should get area", () => {
    const result = firstCircle.getArea();
    const expected = 153.9380400259;
    expect(result).toBe(expected);
  });
});
