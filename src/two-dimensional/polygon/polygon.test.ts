import { Polygon } from "./polygon";

const firstPolygon = new Polygon(3, 5);

test("should get side length of polygon", () => {
  const result = firstPolygon.sideLength;
  const expected = 3;
  expect(result).toBe(expected);
});

test("should get vertex count of polygon", () => {
  const result = firstPolygon.vertexCount;
  const expected = 5;
  expect(result).toBe(expected);
});

test("should get circumference of polygon", () => {
  const result = firstPolygon.getCircumference();
  const expected = 15;
  expect(result).toBe(expected);
});

test("should get area of polygon", () => {
  const result = firstPolygon.getArea();
  const expected = 15.484296605300706;
  expect(result).toBe(expected);
});

test("should get interior angle of polygon", () => {
  const result = firstPolygon.getInteriorAngle();
  const expected = 108;
  expect(result).toBe(expected);
});

test("should get exterior angle of polygon", () => {
  const result = firstPolygon.getExteriorAngle();
  const expected = 72;
  expect(result).toBe(expected);
});

test("should get outer circle radius of polygon", () => {
  const result = firstPolygon.getOuterCircleRadius();
  const expected = 2.5519524250561196;
  expect(result).toBe(expected);
});

test("should get inner circle radius of polygon", () => {
  const result = firstPolygon.getInnerCircleRadius();
  const expected = 2.064572880706761;
  expect(result).toBe(expected);
});
