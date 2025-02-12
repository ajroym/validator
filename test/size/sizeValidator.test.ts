import { validateLength, validateWordCount } from "../../src/validator/size/sizeValidator";

describe('Testing size validation', () => {
    test('An insufficiently large string or array should result in false', () => {
        let str: string = '';

        expect(validateLength(str,2,16)).toBe(false);
    })
});

describe('Testing size validation', () => {
    test('An array or string greater than the maximum size should result in false', () => {
        let str: string = '0123456789abcdef+';

        expect(validateLength(str,2,16)).toBe(false);
    })
});

describe('Testing size validation', () => {
    test('Any string or array that is >= min AND <= max should result in true', () => {
        let maxStr: string = '0123456789abcdef';
        let minStr: string = 'ab';
        let str: string = 'abcdef';

        expect(validateLength(str,2,16)).toBe(true);
        expect(validateLength(minStr,2,16)).toBe(true);
        expect(validateLength(maxStr,2,16)).toBe(true);
    })
});

describe('Testing size validation', () => {
    test('String inputs that are < min or > max after leading and trailing whitespace trimming should return false', () => {
        let str: string = ' a ';
        let minStr: string = ' ab ';

        expect(validateLength(str,2,16)).toBe(false);
        expect(validateLength(minStr,2,16)).toBe(true);
    })
});


/*
    Testing for validateWordCount function.
*/
describe('Testing word counting functionality', () => {
    test('When strict, validateWordCount should return false even if the overall count is less than the max.', () => {
        let sentence: string = 'The quick brown fox jumps over the lazy dog.';
        let spacedSentence: string = 'The quick  brown fox jumps over the lazy dog.';
        
        expect(validateWordCount(sentence, 30, true)).toBe(true);
        expect(validateWordCount(spacedSentence, 30, true)).toBe(false);
    })
});

describe('Testing word counting functionality', () => {
    test('When not using strict, validateWordCount shouldn\'t return false even multiple contiguous spaces exist.', () => {
        let sentence: string = 'The quick brown fox jumps over the lazy dog.';
        let spacedSentence: string = 'The quick             brown fox jumps over the lazy dog.';
        
        expect(validateWordCount(sentence, 30, false)).toBe(true);
        expect(validateWordCount(spacedSentence, 30, false)).toBe(true);
    })
});

describe('Testing word counting functionality', () => {
    test('When the number of words in a string is greater than the maximum permitted, validateWordCount should return false.', () => {
        let sentence: string = 'The quick brown fox jumps over the lazy dog.';
        
        expect(validateWordCount(sentence, 8, false)).toBe(false);
        expect(validateWordCount(sentence, 30, false)).toBe(true);
    })
});