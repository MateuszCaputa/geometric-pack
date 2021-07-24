import { Cuboid } from "./cuboid";

const firstCuboid = new Cuboid(5, 2, 3);

test("should get length of Cuboid", () => {
  const result = firstCuboid.length;
  const expected = 5;
  expect(result).toBe(expected);
});

test("should get width of Cuboid", () => {
  const result = firstCuboid.width;
  const expected = 2;
  expect(result).toBe(expected);
});

test("should get height of Cuboid", () => {
  const result = firstCuboid.height;
  const expected = 3;
  expect(result).toBe(expected);
});

test("should get diagonal of Cuboid", () => {
  const result = firstCuboid.getDiagonal();
  const expected = 6.164414002968976;
  expect(result).toBe(expected);
});

test("should get volume of Cuboid", () => {
  const result = firstCuboid.getVolume();
  const expected = 30;
  expect(result).toBe(expected);
});

test("should get area of Cuboid", () => {
  const result = firstCuboid.getArea();
  const expected = 62;
  expect(result).toBe(expected);
});
