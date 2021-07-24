import { CapsuleDefinition } from "./models/capsule-definition";

export class Capsule {
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
      throw new Error("Capsule constructor takes 2 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Side length and radius must be positive numbers");
    }
  }

  private hasNegative([sideLength, radius]: number[]): boolean {
    return sideLength <= 0 || radius <= 0;
  }

  getDefinition(): CapsuleDefinition {
    return {
      sideLength: this.sideLength,
      radius: this.radius,
      volume: this.getVolume(),
      area: this.getArea(),
      circumference: this.getCircumference(),
    };
  }

  getVolume(): number {
    return (
      Math.PI *
      Math.pow(this.radius, 2) *
      ((4 / 3) * this.radius + this.sideLength)
    );
  }

  getArea(): number {
    return 2 * Math.PI * this.radius * (2 * this.radius + this.sideLength);
  }

  getCircumference(): number {
    return 2 * Math.PI * this.radius;
  }
}
