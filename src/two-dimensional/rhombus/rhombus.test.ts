import { Rhombus } from "./rhombus";

const firstRhombus = new Rhombus(5, 4);

describe("Rhombus", () => {
  test("should get side length", () => {
    const result = firstRhombus.sideLength;
    const expected = 5;
    expect(result).toBe(expected);
  });

  test("should get height", () => {
    const result = firstRhombus.height;
    const expected = 4;
    expect(result).toBe(expected);
  });

  test("should get circumference", () => {
    const result = firstRhombus.getCircumference();
    const expected = 20;
    expect(result).toBe(expected);
  });

  test("should get area", () => {
    const result = firstRhombus.getArea();
    const expected = 20;
    expect(result).toBe(expected);
  });

  test("should get alpha angle", () => {
    const result = firstRhombus.getAlpha();
    const expected = 53.130102354156;
    expect(result).toBe(expected);
  });

  test("should get beta angle", () => {
    const result = firstRhombus.getBeta();
    const expected = 126.869897645844;
    expect(result).toBe(expected);
  });

  test("should get longer diagonal angle", () => {
    const result = firstRhombus.getLongerDiagonal();
    const expected = 8.944271909999;
    expect(result).toBe(expected);
  });

  test("should get shorter diagonal angle", () => {
    const result = firstRhombus.getShorterDiagonal();
    const expected = 4.472135955;
    expect(result).toBe(expected);
  });
});
