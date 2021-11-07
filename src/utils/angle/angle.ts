import { normalizeDecimal } from "../decimal-normalization";
import { transformRadiansToDegrees } from "../transform";

export class Angle {
  readonly radians = normalizeDecimal(this.originalRadians);
  readonly originalDegrees = transformRadiansToDegrees(this.originalRadians);
  readonly degrees = normalizeDecimal(this.originalDegrees);

  constructor(public readonly originalRadians: number) {}

  valueOf(): number {
    return this.degrees;
  }
}
