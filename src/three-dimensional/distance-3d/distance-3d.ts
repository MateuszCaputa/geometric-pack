import { Distance3dDefinition } from "./models/distance-3d-definition";

export class Distance3d {
  public x1: number;
  public y1: number;
  public z1: number;
  public x2: number;
  public y2: number;
  public z2: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.x1 = args[0];
    this.y1 = args[1];
    this.z1 = args[2];
    this.x2 = args[3];
    this.y2 = args[4];
    this.z2 = args[5];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 6) {
      throw new Error("Distance3d constructor takes 6 arguments");
    }
  }

  getDefinition(): Distance3dDefinition {
    return {
      spot1: { x1: this.x1, y1: this.y1, z1: this.z1 },
      spot2: { x2: this.x2, y2: this.y2, z2: this.z2 },
      distance: this.getDistance(),
    };
  }

  getDistance(): number {
    return Math.sqrt(
      Math.pow(this.x2 - this.x1, 2) +
        Math.pow(this.y2 - this.y1, 2) +
        Math.pow(this.z2 - this.z1, 2)
    );
  }
}
