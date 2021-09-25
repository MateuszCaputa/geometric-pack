import { NormalizeResults } from "../../utils/normalize-result";
import { GetDefinition } from "../../models/get-definition";
import { StadiumDefinition } from "./models/stadium-definition";

@NormalizeResults()
export class Stadium implements GetDefinition<StadiumDefinition> {
  public sideLength: number;
  public radius: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.sideLength = args[0];
    this.radius = args[1];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 2) {
      throw new Error("Stadium constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length radius must be positive number");
    }
  }

  private hasNegative([sideLength, radius]: number[]): boolean {
    return sideLength <= 0 || radius <= 0;
  }

  getDefinition(): StadiumDefinition {
    return {
      sideLength: this.sideLength,
      radius: this.radius,
      circumference: this.getCircumference(),
      area: this.getArea(),
    };
  }

  getCircumference(): number {
    return 2 * (Math.PI * this.radius + this.sideLength);
  }

  getArea(): number {
    return (
      Math.PI * Math.pow(this.radius, 2) + 2 * this.radius * this.sideLength
    );
  }
}
