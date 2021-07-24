import { Sphere } from "./sphere";

const firstSphere = new Sphere(6);

test("should get radius of Sphere", () => {
  const result = firstSphere.radius;
  const expected = 6;
  expect(result).toBe(expected);
});

test("should get diameter of Sphere", () => {
  const result = firstSphere.getDiameter();
  const expected = 12;
  expect(result).toBe(expected);
});

test("should get volume of Sphere", () => {
  const result = firstSphere.getVolume();
  const expected = 904.7786842338603;
  expect(result).toBe(expected);
});

test("should get circumference of Sphere", () => {
  const result = firstSphere.getCircumference();
  const expected = 37.69911184307752;
  expect(result).toBe(expected);
});

test("should get area of Sphere", () => {
  const result = firstSphere.getArea();
  const expected = 452.3893421169302;
  expect(result).toBe(expected);
});
