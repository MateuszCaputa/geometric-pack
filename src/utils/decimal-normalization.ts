export const DECIMAL_PRECISION = 12;
export function normalizeDecimal(originalNumber: number): number {
  return parseFloat(originalNumber.toFixed(DECIMAL_PRECISION));
}
