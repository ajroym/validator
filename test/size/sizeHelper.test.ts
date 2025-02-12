import { trimWhitespace } from "../../src/validator/size/sizeHelper"

describe('Testing string whitespace trimming functionality', () => {
    test('The trimWhitespace function should return a properly formatted string with at most 1 space between words', () => { 
        let str: string = 'The quick brown fox    jumps over the  lazy dog';
        let checkStr: string = 'The quick brown fox jumps over the lazy dog';

        expect(trimWhitespace(str)).toEqual(checkStr);
    })
});

describe('Testing string whitespace trimming functionality', () => {
    test('The trimWhitespace function should return an empty string if a text consists only of whitespace.', () => { 
        let str: string = '                                               ';
        let emptyStr: string = '';

        expect(trimWhitespace(str)).toEqual(emptyStr);
    })
});
