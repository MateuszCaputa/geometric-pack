import { Angle } from "./angle";

describe("Angle", () => {
  test("when radians = 0", () => {
    const angle = new Angle(0);
    expect(angle.originalDegrees).toBe(0);
    expect(angle.degrees).toBe(0);
    expect(angle.originalRadians).toBe(0);
    expect(angle.radians).toBe(0);
    expect(angle.valueOf()).toBe(0);
    expect((angle as any) + 1).toBe(1);
  });

  test("when radians = 1", () => {
    const angle = new Angle(1);
    expect(angle.originalDegrees).toBe(57.29577951308232);
    expect(angle.degrees).toBe(57.295779513082);
    expect(angle.originalRadians).toBe(1);
    expect(angle.radians).toBe(1);
    expect(angle.valueOf()).toBe(57.295779513082);
    expect((angle as any) + 1).toBe(58.295779513082);
  });

  test("when radians = pi", () => {
    const angle = new Angle(Math.PI);
    expect(angle.originalDegrees).toBe(180);
    expect(angle.degrees).toBe(180);
    expect(angle.originalRadians).toBe(Math.PI);
    expect(angle.radians).toBe(3.14159265359);
    expect(angle.valueOf()).toBe(180);
    expect((angle as any) + 1).toBe(181);
  });
});
