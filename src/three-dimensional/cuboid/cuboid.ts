import { GetDefinition } from "../../models/get-definition";
import { CuboidDefinition } from "./models/cuboid-definition";

export class Cuboid implements GetDefinition<CuboidDefinition> {
  public length: number;
  public width: number;
  public height: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.length = args[0];
    this.width = args[1];
    this.height = args[2];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 3) {
      throw new Error("Cuboid constructor takes 3 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Length, width and height must be positive numbers");
    }
  }

  private hasNegative([length, width, height]: number[]): boolean {
    return length <= 0 || width <= 0 || height <= 0;
  }

  getDefinition(): CuboidDefinition {
    return {
      length: this.length,
      width: this.width,
      height: this.height,
      diagonal: this.getDiagonal(),
      volume: this.getVolume(),
      area: this.getArea(),
    };
  }

  getVolume(): number {
    return this.length * this.width * this.height;
  }

  getArea(): number {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }

  getDiagonal(): number {
    return Math.sqrt(
      Math.pow(this.length, 2) +
        Math.pow(this.width, 2) +
        Math.pow(this.height, 2)
    );
  }
}
