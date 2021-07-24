import { Cube } from "./cube";

const firstCube = new Cube(5);

test("should get side length of Cube", () => {
  const result = firstCube.sideLength;
  const expected = 5;
  expect(result).toBe(expected);
});

test("should get volume of Cube", () => {
  const result = firstCube.getVolume();
  const expected = 125;
  expect(result).toBe(expected);
});

test("should get circumference of Cube", () => {
  const result = firstCube.getCircumference();
  const expected = 60;
  expect(result).toBe(expected);
});

test("should get area of Cube", () => {
  const result = firstCube.getArea();
  const expected = 150;
  expect(result).toBe(expected);
});

test("should get face diagonal of Cube", () => {
  const result = firstCube.getFaceDiagonal();
  const expected = 7.0710678118654755;
  expect(result).toBe(expected);
});

test("should get solid diagonal of Cube", () => {
  const result = firstCube.getSolidDiagonal();
  const expected = 8.660254037844386;
  expect(result).toBe(expected);
});
