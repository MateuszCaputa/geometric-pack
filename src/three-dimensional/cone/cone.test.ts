import { Cone } from "./cone";

const firstCone = new Cone(3, 7);

describe("Cone", () => {
  test("should get radius", () => {
    const result = firstCone.radius;
    const expected = 3;
    expect(result).toBe(expected);
  });

  test("should get height", () => {
    const result = firstCone.height;
    const expected = 7;
    expect(result).toBe(expected);
  });

  test("should get slant height", () => {
    const result = firstCone.getSlantHeight();
    const expected = 7.615773105864;
    expect(result).toBe(expected);
  });

  test("should get volume", () => {
    const result = firstCone.getVolume();
    const expected = 65.973445725386;
    expect(result).toBe(expected);
  });

  test("should get lateral surface area", () => {
    const result = firstCone.getLateralSurfaceArea();
    const expected = 71.776970522367;
    expect(result).toBe(expected);
  });

  test("should get base surface area", () => {
    const result = firstCone.getBaseSurfaceArea();
    const expected = 28.274333882308;
    expect(result).toBe(expected);
  });

  test("should get total surface area", () => {
    const result = firstCone.getTotalSurfaceArea();
    const expected = 100.051304404675;
    expect(result).toBe(expected);
  });
});
