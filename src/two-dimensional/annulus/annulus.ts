import { NormalizeResults } from "../../utils/normalize-result";
import { GetDefinition } from "../../models/get-definition";
import { AnnulusDefinition } from "./models/annulus-definition";

@NormalizeResults()
export class Annulus implements GetDefinition<AnnulusDefinition> {
  public outerRadius: number;
  public innerRadius: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.outerRadius = args[0];
    this.innerRadius = args[1];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 2) {
      throw new Error("Annulus constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Radiuses must be positive numbers");
    }
  }

  private hasNegative([outerRadius, innerRadius]: number[]): boolean {
    return outerRadius <= 0 || innerRadius <= 0;
  }

  getDefinition(): AnnulusDefinition {
    return {
      outerRadius: this.outerRadius,
      innerRadius: this.innerRadius,
      outerCircumference: this.getOuterCircumference(),
      innerCircumference: this.getInnerCircumference(),
      outerCircleArea: this.getOuterCircleArea(),
      innerCircleArea: this.getInnerCircleArea(),
      annulusArea: this.getAnnulusArea(),
    };
  }

  getOuterCircumference(): number {
    return 2 * Math.PI * this.outerRadius;
  }

  getInnerCircumference(): number {
    return 2 * Math.PI * this.innerRadius;
  }

  getOuterCircleArea(): number {
    return Math.PI * Math.pow(this.outerRadius, 2);
  }

  getInnerCircleArea(): number {
    return Math.PI * Math.pow(this.innerRadius, 2);
  }

  getAnnulusArea(): number {
    return this.getOuterCircleArea() - this.getInnerCircleArea();
  }
}
