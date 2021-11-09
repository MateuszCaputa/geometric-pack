import { Angle } from "./angle/angle";
import { normalizeDecimal } from "./decimal-normalization";

const NormalizeAttribute: MethodDecorator = (
  target,
  key,
  descriptor: PropertyDescriptor
): void => {
  const originalMethod = descriptor.get!;
  descriptor.get = function (): number | Angle {
    const originalResult = originalMethod.apply(this);

    if (typeof originalResult === "number") {
      return normalizeDecimal(originalResult);
    }

    return originalResult;
  };
};

const NormalizeMethodResult: MethodDecorator = (
  target,
  key,
  descriptor: PropertyDescriptor
): void => {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: unknown[]): number | Angle {
    const originalResult = originalMethod.apply(this, args);

    if (typeof originalResult === "number") {
      return normalizeDecimal(originalResult);
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
      const isGetter = typeof descriptor.get === "function";

      if (isMethod) {
        NormalizeMethodResult(target, propName, descriptor);
        Object.defineProperty(target.prototype, propName, descriptor);
      }

      if (isGetter) {
        NormalizeAttribute(target, propName, descriptor);
        Object.defineProperty(target.prototype, propName, descriptor);
      }
    }
  };
};

// __________████████_____██████
// _________█░░░░░░░░██_██░░░░░░█
// ________█░░░░░░░░░░░█░░░░░░░░░█
// _______█░░░░░░░███░░░█░░░░░░░░░█
// _______█░░░░███░░░███░█░░░████░█
// ______█░░░██░░░░░░░░███░██░░░░██
// _____█░░░░░░░░░░░░░░░░░█░░░░░░░░███
// ____█░░░░░░░░░░░░░██████░░░░░████░░█
// ____█░░░░░░░░░█████░░░████░░██░░██░░█
// ___██░░░░░░░███░░░░░░░░░░█░░░░░░░░███
// __█░░░░░░░░░░░░░░█████████░░█████████
// _█░░░░░░░░░░█████_████___████_█████___█
// _█░░░░░░░░░░█______█_███__█_____███_█___█
// █░░░░░░░░░░░░█___████_████____██_██████
// ░░░░░░░░░░░░░█████████░░░████████░░░█
// ░░░░░░░░░░░░░░░░█░░░░░█░░░░░░░░░░░░█
// ░░░░░░░░░░░░░░░░░░░░██░░░░█░░░░░░██
// ░░░░░░░░░░░░░░░░░░██░░░░░░░███████
// ░░░░░░░░░░░░░░░░██░░░░░░░░░░█░░░░░█
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
// ░░░░░░░░░░░█████████░░░░░░░░░░░░░░██
// ░░░░░░░░░░█▒▒▒▒▒▒▒▒███████████████▒▒█
// ░░░░░░░░░█▒▒███████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
// ░░░░░░░░░█▒▒▒▒▒▒▒▒▒█████████████████
// ░░░░░░░░░░████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
// ░░░░░░░░░░░░░░░░░░██████████████████
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
// ██░░░░░░░░░░░░░░░░░░░░░░░░░░░██
// ▓██░░░░░░░░░░░░░░░░░░░░░░░░██
// ▓▓▓███░░░░░░░░░░░░░░░░░░░░█
// ▓▓▓▓▓▓███░░░░░░░░░░░░░░░██
// ▓▓▓▓▓▓▓▓▓███████████████▓▓█
// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
