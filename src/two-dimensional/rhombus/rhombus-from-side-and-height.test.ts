import { RhombusSideAndHeight } from "./rhombus-from-side-and-height";

describe("RhombusSideAndHeight", () => {
  describe("with incorrect input", () => {
    test("should fail due to height being greater than side", () => {
      const result = () => new RhombusSideAndHeight(5, 6);
      const error = new Error("Height must be less or equal to the side");
      expect(result).toThrow(error);
    });

    test("should fail due to non-positive numbers", () => {
      const result = () => new RhombusSideAndHeight(5, -7);
      const error = new Error("Side and height must be positive numbers");
      expect(result).toThrow(error);
    });
  });

  describe("with integer values", () => {
    const integerRhombus = new RhombusSideAndHeight(5, 4);

    test("should get side", () => {
      const result = integerRhombus.side;
      const expected = 5;
      expect(result).toBe(expected);
    });

    test("should get height", () => {
      const result = integerRhombus.height;
      const expected = 4;
      expect(result).toBe(expected);
    });

    test("should get circumference", () => {
      const result = integerRhombus.circumference;
      const expected = 20;
      expect(result).toBe(expected);
    });

    test("should get area", () => {
      const result = integerRhombus.area;
      const expected = 20;
      expect(result).toBe(expected);
    });

    test("should get alpha angle", () => {
      const result = integerRhombus.alpha;
      const expected = 53.130102354156;
      expect(result.degrees).toBe(expected);
    });

    test("should get beta angle", () => {
      const result = integerRhombus.beta;
      const expected = 126.869897645822;
      expect(result.degrees).toBe(expected);
    });

    test("should get longer diagonal", () => {
      const result = integerRhombus.longerDiagonal;
      const expected = 8.94427190999829;
      expect(result).toBe(expected);
    });

    test("should get shorter diagonal", () => {
      const result = integerRhombus.shorterDiagonal;
      const expected = 4.472135955001313;
      expect(result).toBe(expected);
    });

    test("should get definition", () => {
      const result = integerRhombus.getDefinition();
      const expected = {
        side: 5,
        height: 4,
        shorterDiagonal: 4.472135955001313,
        longerDiagonal: 8.94427190999829,
        alpha: {
          originalRadians: 0.9272952180016123,
          radians: 0.927295218002,
          originalDegrees: 53.13010235415598,
          degrees: 53.130102354156,
        },
        beta: {
          originalRadians: 2.214297435587793,
          radians: 2.214297435588,
          originalDegrees: 126.86989764582181,
          degrees: 126.869897645822,
        },
        circumference: 20,
        area: 20,
      };
      expect(result).toEqual(expected);
    });
  });

  describe("with decimal values", () => {
    const decimalRhombus = new RhombusSideAndHeight(0.5, 0.4);

    test("should get side", () => {
      const result = decimalRhombus.side;
      const expected = 0.5;
      expect(result).toBe(expected);
    });

    test("should get height", () => {
      const result = decimalRhombus.height;
      const expected = 0.4;
      expect(result).toBe(expected);
    });

    test("should get circumference", () => {
      const result = decimalRhombus.circumference;
      const expected = 2;
      expect(result).toBe(expected);
    });

    test("should get area", () => {
      const result = decimalRhombus.area;
      const expected = 0.2;
      expect(result).toBe(expected);
    });

    test("should get alpha angle", () => {
      const result = decimalRhombus.alpha;
      const expected = 53.130102354156;
      expect(result.degrees).toBe(expected);
    });

    test("should get beta angle", () => {
      const result = decimalRhombus.beta;
      const expected = 126.869897645822;
      expect(result.degrees).toBe(expected);
    });

    test("should get longer diagonal", () => {
      const result = decimalRhombus.longerDiagonal;
      const expected = 0.8944271909998291;
      expect(result).toBe(expected);
    });

    test("should get shorter diagonal", () => {
      const result = decimalRhombus.shorterDiagonal;
      const expected = 0.44721359550013134;
      expect(result).toBe(expected);
    });
  });
});
