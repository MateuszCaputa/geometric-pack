import { Tube } from "./tube";

const firstTube = new Tube(3, 2, 4);

describe("Tube", () => {
  test("should get outer radius", () => {
    const result = firstTube.outerRadius;
    const expected = 3;
    expect(result).toBe(expected);
  });

  test("should get inner radius", () => {
    const result = firstTube.innerRadius;
    const expected = 2;
    expect(result).toBe(expected);
  });

  test("should get height", () => {
    const result = firstTube.height;
    const expected = 4;
    expect(result).toBe(expected);
  });

  test("should get outer circumference", () => {
    const result = firstTube.getOuterCircumference();
    const expected = 18.84955592153876;
    expect(result).toBe(expected);
  });

  test("should get inner circumference", () => {
    const result = firstTube.getInnerCircumference();
    const expected = 12.566370614359172;
    expect(result).toBe(expected);
  });

  test("should get external lateral surface area", () => {
    const result = firstTube.getExternalLateralSurfaceArea();
    const expected = 75.39822368615503;
    expect(result).toBe(expected);
  });

  test("should get internal lateral surface area", () => {
    const result = firstTube.getInternalLateralSurfaceArea();
    const expected = 50.26548245743669;
    expect(result).toBe(expected);
  });

  test("should get outer area", () => {
    const result = firstTube.getOuterArea();
    const expected = 28.274333882308138;
    expect(result).toBe(expected);
  });

  test("should get inner area", () => {
    const result = firstTube.getInnerArea();
    const expected = 12.566370614359172;
    expect(result).toBe(expected);
  });

  test("should get end surface area", () => {
    const result = firstTube.getEndSurfaceArea();
    const expected = 15.707963267948966;
    expect(result).toBe(expected);
  });

  test("should get outer volume", () => {
    const result = firstTube.getOuterVolume();
    const expected = 113.09733552923255;
    expect(result).toBe(expected);
  });

  test("should get inner volume", () => {
    const result = firstTube.getInnerVolume();
    const expected = 50.26548245743669;
    expect(result).toBe(expected);
  });

  test("should get solid volume", () => {
    const result = firstTube.getSolidVolume();
    const expected = 62.83185307179586;
    expect(result).toBe(expected);
  });

  test("should get wall thickness", () => {
    const result = firstTube.getWallThickness();
    const expected = 1;
    expect(result).toBe(expected);
  });
});
