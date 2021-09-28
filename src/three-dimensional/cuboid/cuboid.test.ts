import { Cuboid } from "./cuboid";

const firstCuboid = new Cuboid(5, 2, 3);

describe("Cuboid", () => {
  test("should get length", () => {
    const result = firstCuboid.length;
    const expected = 5;
    expect(result).toBe(expected);
  });

  test("should get width", () => {
    const result = firstCuboid.width;
    const expected = 2;
    expect(result).toBe(expected);
  });

  test("should get height", () => {
    const result = firstCuboid.height;
    const expected = 3;
    expect(result).toBe(expected);
  });

  test("should get diagonal", () => {
    const result = firstCuboid.getDiagonal();
    const expected = 6.164414002969;
    expect(result).toBe(expected);
  });

  test("should get volume", () => {
    const result = firstCuboid.getVolume();
    const expected = 30;
    expect(result).toBe(expected);
  });

  test("should get area", () => {
    const result = firstCuboid.getArea();
    const expected = 62;
    expect(result).toBe(expected);
  });
});
