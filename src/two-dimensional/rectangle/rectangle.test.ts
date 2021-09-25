import { Rectangle } from "./rectangle";

const firstRectangle = new Rectangle(5, 2);

describe("Rectangle", () => {
  test("should get length side 'a'", () => {
    const result = firstRectangle.sideLengthA;
    const expected = 5;
    expect(result).toBe(expected);
  });

  test("should get length side 'b'", () => {
    const result = firstRectangle.sideLengthB;
    const expected = 2;
    expect(result).toBe(expected);
  });

  test("should get circumference", () => {
    const result = firstRectangle.getCircumference();
    const expected = 14;
    expect(result).toBe(expected);
  });

  test("should get area", () => {
    const result = firstRectangle.getArea();
    const expected = 10;
    expect(result).toBe(expected);
  });

  test("should get diagonal", () => {
    const result = firstRectangle.getDiagonal();
    const expected = 5.385164807135;
    expect(result).toBe(expected);
  });
});
