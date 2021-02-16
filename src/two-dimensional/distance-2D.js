export class Distance2D {
  constructor(...args) {
    this.validateInput(args);
    this.x1 = args[0];
    this.y1 = args[1];
    this.x2 = args[2];
    this.y2 = args[3];
  }

  validateInput(args) {
    if (args.length !== 4) {
      throw new Error("Distance2D constructor takes 4 arguments");
    }
  }

  getDefinition() {
    return {
      spot1: { x1: this.x1, y1: this.y1 },
      spot2: { x2: this.x2, y2: this.y2 },
      distance: this.getDistance(),
    };
  }

  getDistance() {
    return Math.sqrt(
      Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)
    );
  }
}
