export class Cuboid {
  constructor(...args) {
    this.validateInput(args);
    this.length = args[0];
    this.width = args[1];
    this.height = args[2];
  }

  validateInput(args) {
    if (args.length !== 3) {
      throw new Error("Cuboid constructor takes 3 arguments");
    }
    if (this.hasNegative(args)) {
      throw new Error("Length, width and height must be positive numbers");
    }
  }

  hasNegative([length, width, height]) {
    return length <= 0 || width <= 0 || height <= 0;
  }

  getDefinition() {
    return {
      length: this.length,
      width: this.width,
      height: this.height,
      diagonal: this.getDiagonal(),
      volume: this.getVolume(),
      area: this.getArea(),
    };
  }

  getVolume() {
    return this.length * this.width * this.height;
  }

  getArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }

  getDiagonal() {
    return Math.sqrt(
      Math.pow(this.length, 2) +
        Math.pow(this.width, 2) +
        Math.pow(this.height, 2)
    );
  }
}
