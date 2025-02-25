
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

/*
    Compares a string to another strng or a collection of strings.
    It only compares one string to all other strings, checking for true equality.
*/
export function compareEquality(base: string, values : string | string[]) {
    if (typeof values === 'string') {
        return base === values;
    }

    values = values as string[];
    for (let value of values) {
        if (base !== value) {
            return false;
        }
    }
    return true;
}