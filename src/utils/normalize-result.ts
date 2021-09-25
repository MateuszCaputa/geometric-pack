const decimalDigitsPrecision = 12;

export const NormalizeMethodResult: MethodDecorator = (
  target,
  key,
  descriptor: PropertyDescriptor
): void => {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: unknown[]) {
    const originalResult = originalMethod.apply(this, args);
    if (typeof originalResult === "number") {
      const integerDigitsCount = Math.floor(originalResult).toString().length;
      return parseFloat(
        originalResult.toPrecision(decimalDigitsPrecision + integerDigitsCount)
      );
    }

    return originalResult;
  };
};

export const NormalizeResults = (): ClassDecorator => {
  return (target): void => {
    const descriptors = Object.getOwnPropertyDescriptors(target.prototype);
    for (const [propName, descriptor] of Object.entries(descriptors)) {
      const isMethod =
        typeof descriptor.value == "function" && propName != "constructor";
      if (!isMethod) continue;
      NormalizeMethodResult(target, propName, descriptor);
      Object.defineProperty(target.prototype, propName, descriptor);
    }
  };
};
