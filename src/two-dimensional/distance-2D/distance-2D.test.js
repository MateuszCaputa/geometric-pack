import { Distance2D } from "./distance-2D";

const firstDistance2D = new Distance2D(-7, -4, 17, 6.5);

test("should get 'x1' of distance2D", () => {
  const result = firstDistance2D.x1;
  const expected = -7;
  expect(result).toBe(expected);
});

test("should get 'y1' of distance2D", () => {
  const result = firstDistance2D.y1;
  const expected = -4;
  expect(result).toBe(expected);
});

test("should get 'x2' of distance2D", () => {
  const result = firstDistance2D.x2;
  const expected = 17;
  expect(result).toBe(expected);
});

test("should get 'y2' of distance2D", () => {
  const result = firstDistance2D.y2;
  const expected = 6.5;
  expect(result).toBe(expected);
});

test("should get distance between both spots of distance2D", () => {
  const result = firstDistance2D.getDistance();
  const expected = 26.196373794859472;
  expect(result).toBe(expected);
});
