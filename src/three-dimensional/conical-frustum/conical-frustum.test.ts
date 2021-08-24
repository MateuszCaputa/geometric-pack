import { ConicalFrustum } from "./conical-frustum";

const firstConicalFrustum = new ConicalFrustum(3, 4, 5);

describe("ConicalFrustum", () => {
  test("should get first radius", () => {
    const result = firstConicalFrustum.radius1;
    const expected = 3;
    expect(result).toBe(expected);
  });

  test("should get second radius", () => {
    const result = firstConicalFrustum.radius2;
    const expected = 4;
    expect(result).toBe(expected);
  });

  test("should get height", () => {
    const result = firstConicalFrustum.height;
    const expected = 5;
    expect(result).toBe(expected);
  });

  test("should get slant height", () => {
    const result = firstConicalFrustum.getSlantHeight();
    const expected = 5.0990195135927845;
    expect(result).toBe(expected);
  });

  test("should get volume", () => {
    const result = firstConicalFrustum.getVolume();
    const expected = 193.73154697137056;
    expect(result).toBe(expected);
  });

  test("should get lateral surface area", () => {
    const result = firstConicalFrustum.getLateralSurfaceArea();
    const expected = 112.13329571089865;
    expect(result).toBe(expected);
  });

  test("should get top surface area", () => {
    const result = firstConicalFrustum.getTopSurfaceArea();
    const expected = 28.274333882308138;
    expect(result).toBe(expected);
  });

  test("should get base surface area", () => {
    const result = firstConicalFrustum.getBaseSurfaceArea();
    const expected = 50.26548245743669;
    expect(result).toBe(expected);
  });

  test("should get total surface area", () => {
    const result = firstConicalFrustum.getTotalSurfaceArea();
    const expected = 190.67311205064348;
    expect(result).toBe(expected);
  });
});
