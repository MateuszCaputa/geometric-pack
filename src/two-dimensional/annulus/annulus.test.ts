import { Annulus } from "./annulus";

const firstAnnulus = new Annulus(3, 1);

test("should get outer radius of Annulus", () => {
  const result = firstAnnulus.outerRadius;
  const expected = 3;
  expect(result).toBe(expected);
});

test("should get inner radius of Annulus", () => {
  const result = firstAnnulus.innerRadius;
  const expected = 1;
  expect(result).toBe(expected);
});

test("should get outer circumference of Annulus", () => {
  const result = firstAnnulus.getOuterCircumference();
  const expected = 18.84955592153876;
  expect(result).toBe(expected);
});

test("should get inner circumference of Annulus", () => {
  const result = firstAnnulus.getInnerCircumference();
  const expected = 6.283185307179586;
  expect(result).toBe(expected);
});

test("should get outer circle area of Annulus", () => {
  const result = firstAnnulus.getOuterCircleArea();
  const expected = 28.274333882308138;
  expect(result).toBe(expected);
});

test("should get inner circle area of Annulus", () => {
  const result = firstAnnulus.getInnerCircleArea();
  const expected = 3.141592653589793;
  expect(result).toBe(expected);
});

test("should get annulus area of Annulus", () => {
  const result = firstAnnulus.getAnnulusArea();
  const expected = 25.132741228718345;
  expect(result).toBe(expected);
});
