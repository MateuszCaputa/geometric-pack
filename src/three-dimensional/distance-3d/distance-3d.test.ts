import { Distance3d } from "./distance-3d";

const firstDistance3d = new Distance3d(7, 4, 3, 17, 6, 2);

test("should get 'x1' of Distance3d", () => {
  const result = firstDistance3d.x1;
  const expected = 7;
  expect(result).toBe(expected);
});

test("should get 'y1' of Distance3d", () => {
  const result = firstDistance3d.y1;
  const expected = 4;
  expect(result).toBe(expected);
});

test("should get 'z1' of Distance3d", () => {
  const result = firstDistance3d.z1;
  const expected = 3;
  expect(result).toBe(expected);
});

test("should get 'x2' of Distance3d", () => {
  const result = firstDistance3d.x2;
  const expected = 17;
  expect(result).toBe(expected);
});

test("should get 'y2' of Distance3d", () => {
  const result = firstDistance3d.y2;
  const expected = 6;
  expect(result).toBe(expected);
});

test("should get 'z2' of Distance3d", () => {
  const result = firstDistance3d.z2;
  const expected = 2;
  expect(result).toBe(expected);
});

test("should get distance between two spots of Distance3d", () => {
  const result = firstDistance3d.getDistance();
  const expected = 10.246950765959598;
  expect(result).toBe(expected);
});
