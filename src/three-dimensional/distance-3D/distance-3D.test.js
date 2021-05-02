import { Distance3D } from "./distance-3D";

const firstDistance3D = new Distance3D(7, 4, 3, 17, 6, 2);

test("should get 'x1' of Distance3D", () => {
  const result = firstDistance3D.x1;
  const expected = 7;
  expect(result).toBe(expected);
});

test("should get 'y1' of Distance3D", () => {
  const result = firstDistance3D.y1;
  const expected = 4;
  expect(result).toBe(expected);
});

test("should get 'z1' of Distance3D", () => {
  const result = firstDistance3D.z1;
  const expected = 3;
  expect(result).toBe(expected);
});

test("should get 'x2' of Distance3D", () => {
  const result = firstDistance3D.x2;
  const expected = 17;
  expect(result).toBe(expected);
});

test("should get 'y2' of Distance3D", () => {
  const result = firstDistance3D.y2;
  const expected = 6;
  expect(result).toBe(expected);
});

test("should get 'z2' of Distance3D", () => {
  const result = firstDistance3D.z2;
  const expected = 2;
  expect(result).toBe(expected);
});

test("should get distance between two spots of Distance3D", () => {
  const result = firstDistance3D.getDistance();
  const expected = 10.246950765959598;
  expect(result).toBe(expected);
});
