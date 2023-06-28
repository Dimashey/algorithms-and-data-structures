import {describe, it, expect} from "@jest/globals";
import {evaluateReversePolishNotation} from "./evaluate-reverse-polish-notation";

describe('evaluateReversePolishNotation', () => {
    it('should evaluates simple expression', () => {
        expect(evaluateReversePolishNotation('1 2 +')).toEqual(3)
        expect(evaluateReversePolishNotation('3 2 -')).toEqual(1)
        expect(evaluateReversePolishNotation('4 4 *')).toEqual(16)
        expect(evaluateReversePolishNotation('12 3 /')).toEqual(4)
    })

    it('should evaluates complex expression', () => {
        expect(evaluateReversePolishNotation('4 13 5 / +')).toEqual(6.6)
        expect(evaluateReversePolishNotation('5 15 + 4 7 + 1 - /')).toEqual(2)
        expect(evaluateReversePolishNotation('5 15 + 4 7 + 1 - *')).toEqual(200)
        expect(evaluateReversePolishNotation('5 15 + 4 7 + 1 - * 50 /')).toEqual(4)
    })
})