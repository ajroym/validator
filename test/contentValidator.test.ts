import { isSpecialCharacter, isUpperCase } from "../src/validator/contentValidator";

/* *
 * Testing the isSpecialCharacter function.
 * */
describe('Testing special character validation', () => {
    test('A non-special character should be compared using the RegExp and return false', () => {
        let char: string = 'a';
        expect(isSpecialCharacter(char, /[$&+,:;=?@#|'<>.^*()%!-]/)).toBe(false); 
    })
});

describe('Testing special character validation', () => {
    test('A special character should be compared using the RegExp and return true', () => {
        let char: string = '#';
        expect(isSpecialCharacter(char, /[$&+,:;=?@#|'<>.^*()%!-]/)).toBe(true); 
    })
});

describe('Testing special character validation', () => {
    test('Function should only evaluate character at index 0', () => {
        let char: string = 'g$';
        expect(isSpecialCharacter(char, /[$&+,:;=?@#|'<>.^*()%!-]/)).toBe(false); 
    })
});


/* *
 * Testing the isUpperCase function.
 * */
describe('Testing upper-case character validation', () => {
    test('Function should only evaluate character at index 0', () => {
        let char: string = 'xyz';
        expect(isUpperCase(char)).toBe(false); 
    })
});

describe('Testing upper-case character validation', () => {
    test('An upper-case character should return true.', () => {
        let char: string = 'X';
        expect(isUpperCase(char)).toBe(true); 
    })
});

describe('Testing upper-case character validation', () => {
    test('A lower-case character should return false.', () => {
        let char: string = 'xyz';
        expect(isUpperCase(char)).toBe(false); 
    })
});

describe('Testing upper-case character validation', () => {
    test('An non-Latin character should return false, unless it is a variant member of the Latin alphabet.', () => {
        let num: string = '1';
        expect(isUpperCase(num)).toBe(false); 

        let char: string = 'ふ';
        expect(isUpperCase(char)).toBe(false);

        let variant: string = 'Ç'
        expect(isUpperCase(variant)).toBe(true);

        let operator = '÷';
        expect(isUpperCase(operator)).toBe(false);
    })
});