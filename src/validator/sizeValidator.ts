/*
    Verfies that the input is between the specified minimum and maximum, inclusive. 
    Trims out any leading or trailing whitespace prior to performing evaluation.
*/
export function validateLength(input: string | any[], min: number, max: number): boolean {
    if (input === null || input === undefined) return false;

    if (typeof input === "string") {
        input = (input as string).trim();
    }
    return input.length >= min && input.length <= max;
}

/*
    Validates the wordcount of a given string against a provided maximum, inclusive.
    The strict parameter toggles strict mode on or off. Strict mode ensures that
    strings containing multiple instances of whitespace contiguously return false.
*/
export function validateWordCount(input: string, max: number, strict: boolean): boolean {
    let count: number = 0;
    let matchWhiteSpace: RegExp = /[^\S\n]$/;

    let prevChar: string = '';
    for (let i = 0; i < input.length; i++) {
        let currentChar: string = input.charAt(i);

        if (matchWhiteSpace.test(currentChar) && currentChar === prevChar && strict) {
            return false;
        } else if (matchWhiteSpace.test(currentChar) && !matchWhiteSpace.test(prevChar)) {
            
            count++;
        }
        prevChar = currentChar;
    }
    return (count + 1) <= max; 
}

/*
    TODO: Implement function, determine necessary levels of strictness, separate from validator
*/
export function countWords(input: string, strictnessLevel: string) {

}

/*
    Trims the whitespace from the beginning and end of a string,
    as well as excessive whitespace between words. 
*/
export function trimWhitespace(input: string): string {
    let matchWhiteSpace: RegExp = /[^\S\n]$/;

    let trimmedInput = '';
    input = input.trim();

    let start = 0;
    let prevChar = '';
    for(let i = 0; i < input.length; i++) {
        let currentChar = input.charAt(i);
        if (!matchWhiteSpace.test(currentChar) && matchWhiteSpace.test(prevChar)) {
            start = i;
        } else {
            trimmedInput += input.substring(start, i + 1);
        }
        prevChar = currentChar;
    }
    
    return trimmedInput;
}