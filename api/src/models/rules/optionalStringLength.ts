import { invalid, Rule, Validity } from "../../../deps.ts";

export function optionalStringLength(
  minLength: number,
  maxLength: number,
): Rule {
  return (value: string): Validity => {
    if (value === null) {
      return invalid("optionalStringLength", { value, minLength, maxLength });
    }
    if (value.length < minLength || value.length > maxLength) {
      return invalid("optionalStringLength", { value, minLength, maxLength });
    }
  };
}
