import { NormalizeResults } from "../../utils/normalize-result";
import { Angle } from "../../utils/angle/angle";
import { GetDefinition } from "../../models/get-definition";
import { RhombusDefinition } from "./models/rhombus-definition";

@NormalizeResults()
export class RhombusSideAndHeight implements GetDefinition<RhombusDefinition> {
  get shorterDiagonal(): number {
    return Math.sqrt(
      2 * Math.pow(this.side, 2) -
        2 * Math.pow(this.side, 2) * Math.cos(this.alpha.radians)
    );
  }

  get longerDiagonal(): number {
    return Math.sqrt(
      2 * Math.pow(this.side, 2) +
        2 * Math.pow(this.side, 2) * Math.cos(this.alpha.radians)
    );
  }

  get alpha(): Angle {
    const radians = Math.asin(this.area / this.side ** 2);
    return new Angle(radians);
  }

  get beta(): Angle {
    return new Angle(Math.PI - this.alpha.radians);
  }

  get circumference(): number {
    return this.side * 4;
  }

  get area(): number {
    return this.side * this.height;
  }

  constructor(public readonly side: number, public readonly height: number) {
    this.validateInput();
  }

  private validateInput(): void {
    if (!this.isValid(this.side) || !this.isValid(this.height)) {
      throw new Error("Side and height must be positive numbers");
    }
    if (this.height > this.side) {
      throw new Error("Height must be less or equal to the side");
    }
  }

  private isValid(value: unknown) {
    return typeof value === "number" && value > 0;
  }

  getDefinition(): RhombusDefinition {
    return {
      side: this.side,
      height: this.height,
      shorterDiagonal: this.shorterDiagonal,
      longerDiagonal: this.longerDiagonal,
      alpha: this.alpha,
      beta: this.beta,
      circumference: this.circumference,
      area: this.area,
    };
  }
}
