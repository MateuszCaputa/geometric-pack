import { Hemisphere } from "./hemisphere";

const firstHemisphere = new Hemisphere(9);

test("should get radius of Hemisphere", () => {
  const result = firstHemisphere.radius;
  const expected = 9;
  expect(result).toBe(expected);
});

test("should get volume of Hemisphere", () => {
  const result = firstHemisphere.getVolume();
  const expected = 1526.8140296446393;
  expect(result).toBe(expected);
});

test("should get base circumference of Hemisphere", () => {
  const result = firstHemisphere.getBaseCircumference();
  const expected = 56.548667764616276;
  expect(result).toBe(expected);
});

test("should get curved surface area of Hemisphere", () => {
  const result = firstHemisphere.getCurvedSurfaceArea();
  const expected = 508.93800988154646;
  expect(result).toBe(expected);
});

test("should get base surface area of Hemisphere", () => {
  const result = firstHemisphere.getBaseSurfaceArea();
  const expected = 254.46900494077323;
  expect(result).toBe(expected);
});

test("should get total surface area of Hemisphere", () => {
  const result = firstHemisphere.getTotalSurfaceArea();
  const expected = 763.4070148223198;
  expect(result).toBe(expected);
});
