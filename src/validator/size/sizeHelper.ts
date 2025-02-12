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
        } 
        else if ((matchWhiteSpace.test(currentChar) && !matchWhiteSpace.test(prevChar)) || i === input.length - 1){
            trimmedInput += input.substring(start, i + 1);
        }
        prevChar = currentChar;
    }
    
    return trimmedInput;
}


/*
    TODO: Implement function, determine necessary levels of strictness, separate from validator
*/
export function countWords(input: string, strictnessLevel: string) {
    
    for (let i = 0; i < input.length; i++) {
    }
}

