import { Capsule } from "./capsule";

const firstCapsule = new Capsule(5, 4);

test("should get side length of Capsule", () => {
  const result = firstCapsule.sideLength;
  const expected = 5;
  expect(result).toBe(expected);
});

test("should get radius of Capsule", () => {
  const result = firstCapsule.radius;
  const expected = 4;
  expect(result).toBe(expected);
});

test("should get volume of Capsule", () => {
  const result = firstCapsule.getVolume();
  const expected = 519.4099853935124;
  expect(result).toBe(expected);
});

test("should get area of Capsule", () => {
  const result = firstCapsule.getArea();
  const expected = 326.7256359733385;
  expect(result).toBe(expected);
});

test("should get circumference of Capsule", () => {
  const result = firstCapsule.getCircumference();
  const expected = 25.132741228718345;
  expect(result).toBe(expected);
});
