import { GetDefinition } from "../../models/get-definition";
import { Distance2dDefinition } from "./models/distance-2d-definition";

export class Distance2d implements GetDefinition<Distance2dDefinition> {
  public x1: number;
  public y1: number;
  public x2: number;
  public y2: number;

  constructor(...args: number[]) {
    this.validateInput(args);
    this.x1 = args[0];
    this.y1 = args[1];
    this.x2 = args[2];
    this.y2 = args[3];
  }

  private validateInput(args: number[]): void {
    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("Argument must be a number");
      }
    });
    if (args.length !== 4) {
      throw new Error("Distance2d constructor takes 4 arguments");
    }
  }

  getDefinition(): Distance2dDefinition {
    return {
      spot1: { x1: this.x1, y1: this.y1 },
      spot2: { x2: this.x2, y2: this.y2 },
      distance: this.getDistance(),
    };
  }

  getDistance(): number {
    return Math.sqrt(
      Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)
    );
  }
}
