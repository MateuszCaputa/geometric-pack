import { Annulus } from "./annulus";

const firstAnnulus = new Annulus(3, 1);

describe("Annulus", () => {
  test("should get outer radius", () => {
    const result = firstAnnulus.outerRadius;
    const expected = 3;
    expect(result).toBe(expected);
  });

  test("should get inner radius", () => {
    const result = firstAnnulus.innerRadius;
    const expected = 1;
    expect(result).toBe(expected);
  });

  test("should get outer circumference", () => {
    const result = firstAnnulus.getOuterCircumference();
    const expected = 18.84955592153876;
    expect(result).toBe(expected);
  });

  test("should get inner circumference", () => {
    const result = firstAnnulus.getInnerCircumference();
    const expected = 6.283185307179586;
    expect(result).toBe(expected);
  });

  test("should get outer circle area", () => {
    const result = firstAnnulus.getOuterCircleArea();
    const expected = 28.274333882308138;
    expect(result).toBe(expected);
  });

  test("should get inner circle area", () => {
    const result = firstAnnulus.getInnerCircleArea();
    const expected = 3.141592653589793;
    expect(result).toBe(expected);
  });

  test("should get annulus area", () => {
    const result = firstAnnulus.getAnnulusArea();
    const expected = 25.132741228718345;
    expect(result).toBe(expected);
  });
});
