import { Distance2d } from "./distance-2d";

const firstDistance2d = new Distance2d(-7, -4, 17, 6.5);

test("should get 'x1' of distance2D", () => {
  const result = firstDistance2d.x1;
  const expected = -7;
  expect(result).toBe(expected);
});

test("should get 'y1' of distance2D", () => {
  const result = firstDistance2d.y1;
  const expected = -4;
  expect(result).toBe(expected);
});

test("should get 'x2' of distance2D", () => {
  const result = firstDistance2d.x2;
  const expected = 17;
  expect(result).toBe(expected);
});

test("should get 'y2' of distance2D", () => {
  const result = firstDistance2d.y2;
  const expected = 6.5;
  expect(result).toBe(expected);
});

test("should get distance between both spots of distance2D", () => {
  const result = firstDistance2d.getDistance();
  const expected = 26.196373794859472;
  expect(result).toBe(expected);
});
