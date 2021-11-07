import { Angle } from "./angle/angle";
import { normalizeDecimal } from "./decimal-normalization";

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
      if (!isMethod) continue;
      NormalizeMethodResult(target, propName, descriptor);
      Object.defineProperty(target.prototype, propName, descriptor);
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
