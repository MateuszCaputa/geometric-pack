import { Rhombus } from "./rhombus";
import { RhombusFromDiagonals } from "./rhombus-from-diagonals";
import { RhombusSideAndHeight } from "./rhombus-from-side-and-height";

describe("Rhombus", () => {
  test("fromDiagonals", () => {
    const fromDiagonals = Rhombus.fromDiagonals(7, 8);
    expect(fromDiagonals).toBeInstanceOf(RhombusFromDiagonals);
  });

  test("fromSideAndHeight", () => {
    const fromSideAndHeight = Rhombus.fromSideAndHeight(8, 7);
    expect(fromSideAndHeight).toBeInstanceOf(RhombusSideAndHeight);
  });
});
