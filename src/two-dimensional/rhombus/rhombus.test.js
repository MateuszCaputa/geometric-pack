import { Rhombus } from "./rhombus";

const firstRhombus = new Rhombus(5, 4);

test("should get side length of rhombus", () => {
  const result = firstRhombus.sideLength;
  const expected = 5;
  expect(result).toBe(expected);
});

test("should get height of rhombus", () => {
  const result = firstRhombus.height;
  const expected = 4;
  expect(result).toBe(expected);
});

test("should get circumference of rhombus", () => {
  const result = firstRhombus.getCircumference();
  const expected = 20;
  expect(result).toBe(expected);
});

test("should get area of rhombus", () => {
  const result = firstRhombus.getArea();
  const expected = 20;
  expect(result).toBe(expected);
});

test("should get alpha angle of rhombus", () => {
  const result = firstRhombus.getAlpha();
  const expected = 53.13010235415598;
  expect(result).toBe(expected);
});

test("should get beta angle of rhombus", () => {
  const result = firstRhombus.getBeta();
  const expected = 126.86989764584402;
  expect(result).toBe(expected);
});

test("should get longer diagonal angle of rhombus", () => {
  const result = firstRhombus.getLongerDiagonal();
  const expected = 8.94427190999916;
  expect(result).toBe(expected);
});

test("should get shorter diagonal angle of rhombus", () => {
  const result = firstRhombus.getShorterDiagonal();
  const expected = 4.47213595499958;
  expect(result).toBe(expected);
});
