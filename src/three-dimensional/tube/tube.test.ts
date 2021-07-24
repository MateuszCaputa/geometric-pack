import { Tube } from "./tube";

const firstTube = new Tube(3, 2, 4);

test("should get outer radius of Tube", () => {
  const result = firstTube.outerRadius;
  const expected = 3;
  expect(result).toBe(expected);
});

test("should get inner radius of Tube", () => {
  const result = firstTube.innerRadius;
  const expected = 2;
  expect(result).toBe(expected);
});

test("should get height of Tube", () => {
  const result = firstTube.height;
  const expected = 4;
  expect(result).toBe(expected);
});

test("should get outer circumference of Tube", () => {
  const result = firstTube.getOuterCircumference();
  const expected = 18.84955592153876;
  expect(result).toBe(expected);
});

test("should get inner circumference of Tube", () => {
  const result = firstTube.getInnerCircumference();
  const expected = 12.566370614359172;
  expect(result).toBe(expected);
});

test("should get external lateral surface area of Tube", () => {
  const result = firstTube.getExternalLateralSurfaceArea();
  const expected = 75.39822368615503;
  expect(result).toBe(expected);
});

test("should get internal lateral surface area of Tube", () => {
  const result = firstTube.getInternalLateralSurfaceArea();
  const expected = 50.26548245743669;
  expect(result).toBe(expected);
});

test("should get outer area of Tube", () => {
  const result = firstTube.getOuterArea();
  const expected = 28.274333882308138;
  expect(result).toBe(expected);
});

test("should get inner area of Tube", () => {
  const result = firstTube.getInnerArea();
  const expected = 12.566370614359172;
  expect(result).toBe(expected);
});

test("should get end surface area of Tube", () => {
  const result = firstTube.getEndSurfaceArea();
  const expected = 15.707963267948966;
  expect(result).toBe(expected);
});

test("should get outer volume of Tube", () => {
  const result = firstTube.getOuterVolume();
  const expected = 113.09733552923255;
  expect(result).toBe(expected);
});

test("should get inner volume of Tube", () => {
  const result = firstTube.getInnerVolume();
  const expected = 50.26548245743669;
  expect(result).toBe(expected);
});

test("should get solid volume of Tube", () => {
  const result = firstTube.getSolidVolume();
  const expected = 62.83185307179586;
  expect(result).toBe(expected);
});

test("should get wall thickness of Tube", () => {
  const result = firstTube.getWallThickness();
  const expected = 1;
  expect(result).toBe(expected);
});
