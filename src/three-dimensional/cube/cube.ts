import { CubeDefinition } from "./models/cube-definition";

export class Cube {
  public sideLength: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.sideLength = args[0];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 1) {
      throw new Error("Cube constructor takes 1 argument");
    }
    if (this.hasNegative(args[0])) {
      throw new Error("Side length must be positive numbers");
    }
  }

  private hasNegative(sideLength: number): boolean {
    return sideLength <= 0;
  }

  getDefinition(): CubeDefinition {
    return {
      sideLength: this.sideLength,
      volume: this.getVolume(),
      circumference: this.getCircumference(),
      area: this.getArea(),
      faceDiagonal: this.getFaceDiagonal(),
      solidDiagonal: this.getSolidDiagonal(),
    };
  }

  getVolume(): number {
    return Math.pow(this.sideLength, 3);
  }

  getCircumference(): number {
    return 12 * this.sideLength;
  }

  getArea(): number {
    return 6 * Math.pow(this.sideLength, 2);
  }

  getFaceDiagonal(): number {
    return this.sideLength * Math.sqrt(2);
  }

  getSolidDiagonal(): number {
    return this.sideLength * Math.sqrt(3);
  }
}
