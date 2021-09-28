import { Capsule } from "./capsule";

const firstCapsule = new Capsule(5, 4);

describe("Capsule", () => {
  test("should get side length", () => {
    const result = firstCapsule.sideLength;
    const expected = 5;
    expect(result).toBe(expected);
  });

  test("should get radius", () => {
    const result = firstCapsule.radius;
    const expected = 4;
    expect(result).toBe(expected);
  });

  test("should get volume", () => {
    const result = firstCapsule.getVolume();
    const expected = 519.409985393512;
    expect(result).toBe(expected);
  });

  test("should get area", () => {
    const result = firstCapsule.getArea();
    const expected = 326.725635973339;
    expect(result).toBe(expected);
  });

  test("should get circumference", () => {
    const result = firstCapsule.getCircumference();
    const expected = 25.132741228718;
    expect(result).toBe(expected);
  });
});
