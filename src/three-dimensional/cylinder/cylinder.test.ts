import { Cylinder } from "./cylinder";

const firstCylinder = new Cylinder(4, 6);

describe("Cylinder", () => {
  test("should get radius", () => {
    const result = firstCylinder.radius;
    const expected = 4;
    expect(result).toBe(expected);
  });

  test("should get height", () => {
    const result = firstCylinder.height;
    const expected = 6;
    expect(result).toBe(expected);
  });

  test("should get volume", () => {
    const result = firstCylinder.getVolume();
    const expected = 301.59289474462;
    expect(result).toBe(expected);
  });

  test("should get lateral surface area", () => {
    const result = firstCylinder.getLateralSurfaceArea();
    const expected = 150.79644737231;
    expect(result).toBe(expected);
  });

  test("should get base surface area", () => {
    const result = firstCylinder.getBaseSurfaceArea();
    const expected = 50.265482457437;
    expect(result).toBe(expected);
  });

  test("should get total surface area", () => {
    const result = firstCylinder.getTotalSurfaceArea();
    const expected = 251.327412287184;
    expect(result).toBe(expected);
  });
});
