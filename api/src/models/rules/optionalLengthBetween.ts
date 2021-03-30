import { Validity, invalid, Rule } from '../../../deps.ts';

export function optionalLengthBetween(minLength: number, maxLength: number): Rule {
    return (value: any): Validity => {
        if (value === null) {
            return invalid("optionalLengthBetween", { value, minLength, maxLength });
        }
        if (value.length < minLength || value.length > maxLength) {
            return invalid("optionalLengthBetween", { value, minLength, maxLength });
        }
    };
}