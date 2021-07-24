import { Pyramid } from "./pyramid";

const firstPyramid = new Pyramid(3, 8);

test("should get side length of Pyramid", () => {
  const result = firstPyramid.sideLength;
  const expected = 3;
  expect(result).toBe(expected);
});

test("should get height of Pyramid", () => {
  const result = firstPyramid.height;
  const expected = 8;
  expect(result).toBe(expected);
});

test("should get volume of Pyramid", () => {
  const result = firstPyramid.getVolume();
  const expected = 24;
  expect(result).toBe(expected);
});

test("should get slant height of Pyramid", () => {
  const result = firstPyramid.getSlantHeight();
  const expected = 8.139410298049853;
  expect(result).toBe(expected);
});

test("should get lateral surface area of Pyramid", () => {
  const result = firstPyramid.getLateralSurfaceArea();
  const expected = 48.83646178829912;
  expect(result).toBe(expected);
});

test("should get base surface area of Pyramid", () => {
  const result = firstPyramid.getBaseSurfaceArea();
  const expected = 9;
  expect(result).toBe(expected);
});

test("should get total surface area of Pyramid", () => {
  const result = firstPyramid.getTotalSurfaceArea();
  const expected = 57.83646178829912;
  expect(result).toBe(expected);
});
