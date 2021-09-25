import { Polygon } from "./polygon";

const firstPolygon = new Polygon(3, 5);

describe("Polygon", () => {
  test("should get side length", () => {
    const result = firstPolygon.sideLength;
    const expected = 3;
    expect(result).toBe(expected);
  });

  test("should get vertex count", () => {
    const result = firstPolygon.vertexCount;
    const expected = 5;
    expect(result).toBe(expected);
  });

  test("should get circumference", () => {
    const result = firstPolygon.getCircumference();
    const expected = 15;
    expect(result).toBe(expected);
  });

  test("should get area", () => {
    const result = firstPolygon.getArea();
    const expected = 15.484296605301;
    expect(result).toBe(expected);
  });

  test("should get interior angle", () => {
    const result = firstPolygon.getInteriorAngle();
    const expected = 108;
    expect(result).toBe(expected);
  });

  test("should get exterior angle", () => {
    const result = firstPolygon.getExteriorAngle();
    const expected = 72;
    expect(result).toBe(expected);
  });

  test("should get outer circle radius", () => {
    const result = firstPolygon.getOuterCircleRadius();
    const expected = 2.551952425056;
    expect(result).toBe(expected);
  });

  test("should get inner circle radius", () => {
    const result = firstPolygon.getInnerCircleRadius();
    const expected = 2.064572880707;
    expect(result).toBe(expected);
  });
});
