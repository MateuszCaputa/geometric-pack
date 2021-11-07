import { RhombusFromDiagonals } from "./rhombus-from-diagonals";

describe("RhombusFromDiagonals", () => {
  describe("with incorrect input", () => {
    test("should fail due to non-positive numbers", () => {
      const result = () => new RhombusFromDiagonals(0, 7);
      const error = new Error("Diagonals must be positive numbers");
      expect(result).toThrow(error);
    });
  });

  describe("with integer values", () => {
    const integerRhombus = new RhombusFromDiagonals(8, 9);

    test("should get side", () => {
      const result = integerRhombus.side;
      const expected = 6.020797289396148;
      expect(result).toBe(expected);
    });

    test("should get height", () => {
      const result = integerRhombus.height;
      const expected = 5.979274549468959;
      expect(result).toBe(expected);
    });

    test("should get circumference", () => {
      const result = integerRhombus.circumference;
      const expected = 24.08318915758459;
      expect(result).toBe(expected);
    });

    test("should get area", () => {
      const result = integerRhombus.area;
      const expected = 36;
      expect(result).toBe(expected);
    });

    test("should get alpha angle", () => {
      const result = integerRhombus.alpha;
      const expected = 83.26707867314;
      expect(result.degrees).toBe(expected);
    });

    test("should get beta angle", () => {
      const result = integerRhombus.beta;
      const expected = 96.732921326885;
      expect(result.degrees).toBe(expected);
    });

    test("should get longer diagonal", () => {
      const result = integerRhombus.longerDiagonal;
      const expected = 9;
      expect(result).toBe(expected);
    });

    test("should get shorter diagonal", () => {
      const result = integerRhombus.shorterDiagonal;
      const expected = 8;
      expect(result).toBe(expected);
    });

    test("should get definition", () => {
      const result = integerRhombus.getDefinition();
      const expected = {
        side: 6.020797289396148,
        height: 5.979274549468959,
        shorterDiagonal: 8,
        longerDiagonal: 9,
        alpha: {
          originalRadians: 1.453284681363451,
          radians: 1.453284681363,
          originalDegrees: 83.26707867314039,
          degrees: 83.26707867314,
        },
        beta: {
          originalRadians: 1.688307972226793,
          radians: 1.688307972227,
          originalDegrees: 96.73292132688546,
          degrees: 96.732921326885,
        },
        circumference: 24.08318915758459,
        area: 36,
      };
      expect(result).toEqual(expected);
    });
  });

  describe("with decimal values", () => {
    const decimalRhombus = new RhombusFromDiagonals(0.8, 0.9);

    test("should get side", () => {
      const result = decimalRhombus.side;
      const expected = 0.6020797289396148;
      expect(result).toBe(expected);
    });

    test("should get height", () => {
      const result = decimalRhombus.height;
      const expected = 0.597927454946896;
      expect(result).toBe(expected);
    });

    test("should get circumference", () => {
      const result = decimalRhombus.circumference;
      const expected = 2.4083189157584592;
      expect(result).toBe(expected);
    });

    test("should get area", () => {
      const result = decimalRhombus.area;
      const expected = 0.36;
      expect(result).toBe(expected);
    });

    test("should get alpha angle", () => {
      const result = decimalRhombus.alpha;
      const expected = 83.26707867314;
      expect(result.degrees).toBe(expected);
    });

    test("should get beta angle", () => {
      const result = decimalRhombus.beta;
      const expected = 96.732921326885;
      expect(result.degrees).toBe(expected);
    });

    test("should get longer diagonal", () => {
      const result = decimalRhombus.longerDiagonal;
      const expected = 0.9;
      expect(result).toBe(expected);
    });

    test("should get shorter diagonal", () => {
      const result = decimalRhombus.shorterDiagonal;
      const expected = 0.8;
      expect(result).toBe(expected);
    });
  });
});
