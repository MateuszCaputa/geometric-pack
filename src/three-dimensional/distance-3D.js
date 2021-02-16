export class Distance3D {
  constructor(...args) {
    this.validateInput(args);
    this.x1 = args[0];
    this.y1 = args[1];
    this.z1 = args[2];
    this.x2 = args[3];
    this.y2 = args[4];
    this.z2 = args[5];
  }

  validateInput(args) {
    if (args.length !== 6) {
      throw new Error("Distance3D constructor takes 6 arguments");
    }
  }

  getDefinition() {
    return {
      spot1: { x1: this.x1, y1: this.y1, z1: this.z1 },
      spot2: { x2: this.x2, y2: this.y2, z2: this.z2 },
      distance: this.getDistance(),
    };
  }

  getDistance() {
    return Math.sqrt(
      Math.pow(this.x2 - this.x1, 2) +
        Math.pow(this.y2 - this.y1, 2) +
        Math.pow(this.z2 - this.z1, 2)
    );
  }
}
