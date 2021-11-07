import { NormalizeResults } from "../../utils/normalize-result";
import { Angle } from "../../utils/angle/angle";
import { GetDefinition } from "../../models/get-definition";
import { RhombusDefinition } from "./models/rhombus-definition";

@NormalizeResults()
export class RhombusFromDiagonals implements GetDefinition<RhombusDefinition> {
  get side(): number {
    return Math.sqrt(this.shorterDiagonal ** 2 + this.longerDiagonal ** 2) / 2;
  }

  get height(): number {
    return this.side * Math.sin(this.alpha.radians);
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
    return (this.shorterDiagonal * this.longerDiagonal) / 2;
  }

  constructor(
    public readonly shorterDiagonal: number,
    public readonly longerDiagonal: number
  ) {
    this.validateInput();
  }

  private validateInput(): void {
    if (
      !this.isValid(this.shorterDiagonal) ||
      !this.isValid(this.longerDiagonal)
    ) {
      throw new Error("Diagonals must be positive numbers");
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
