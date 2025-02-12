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

