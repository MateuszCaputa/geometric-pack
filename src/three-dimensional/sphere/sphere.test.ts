import { Sphere } from "./sphere";

const firstSphere = new Sphere(6);

describe("Sphere", () => {
  test("should get radius", () => {
    const result = firstSphere.radius;
    const expected = 6;
    expect(result).toBe(expected);
  });

  test("should get diameter", () => {
    const result = firstSphere.getDiameter();
    const expected = 12;
    expect(result).toBe(expected);
  });

  test("should get volume", () => {
    const result = firstSphere.getVolume();
    const expected = 904.77868423386;
    expect(result).toBe(expected);
  });

  test("should get circumference", () => {
    const result = firstSphere.getCircumference();
    const expected = 37.699111843078;
    expect(result).toBe(expected);
  });

  test("should get area", () => {
    const result = firstSphere.getArea();
    const expected = 452.38934211693;
    expect(result).toBe(expected);
  });
});
