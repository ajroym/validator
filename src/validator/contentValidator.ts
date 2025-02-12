import { trimWhitespace } from "./sizeValidator";

const INDEX_START = 0;

/*
    Checks the first character of a string to determine whether it is a special character. 
    Provides a default RegExp configuration which is subject to change at a later date.
*/
export function isSpecialCharacter(char: string, charRegex: RegExp = /[$&+,:;=?@#|'<>.^*()%!-]/): boolean {
    let initialChar = char.charAt(INDEX_START); 
    return charRegex.test(initialChar);
}

/*
    Checks if a given character is within a valid upper-case range,
    within the paramaters of major Latin alphabets.
*/
export function isUpperCase(char: string): boolean {
    let initialChar: string = char.charAt(INDEX_START); 
    return /^[A-ZÀ-ÖØ-Þ]/.test(initialChar);
}

/*
    Compares a complete string to a regular expression. 
*/
export function adheresToRegExpPattern(input: string, strRegex: RegExp): boolean {
    return strRegex.test(input);
} 