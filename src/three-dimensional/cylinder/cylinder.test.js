import { Cylinder } from "./cylinder";

const firstCylinder = new Cylinder(4, 6);

test("should get radius of Cylinder", () => {
  const result = firstCylinder.radius;
  const expected = 4;
  expect(result).toBe(expected);
});

test("should get height of Cylinder", () => {
  const result = firstCylinder.height;
  const expected = 6;
  expect(result).toBe(expected);
});

test("should get volume of Cylinder", () => {
  const result = firstCylinder.getVolume();
  const expected = 301.59289474462014;
  expect(result).toBe(expected);
});

test("should get lateral surface area of Cylinder", () => {
  const result = firstCylinder.getLateralSurfaceArea();
  const expected = 150.79644737231007;
  expect(result).toBe(expected);
});

test("should get base surface area of Cylinder", () => {
  const result = firstCylinder.getBaseSurfaceArea();
  const expected = 50.26548245743669;
  expect(result).toBe(expected);
});

test("should get total surface area of Cylinder", () => {
  const result = firstCylinder.getTotalSurfaceArea();
  const expected = 251.32741228718345;
  expect(result).toBe(expected);
});
