import {describe, it, expect} from "@jest/globals";
import {isValidParentheses} from "./valid-parentheses";

describe('isValidParentheses', () => {
    it('should returns false if string starts from close parenthesis', () => {
        expect(isValidParentheses('][')).toEqual(false)
    })

    it('should returns true if simple closed parentheses', () => {
        expect(isValidParentheses('()')).toEqual(true)
        expect(isValidParentheses('()[]{}')).toEqual(true)
        expect(isValidParentheses('{}')).toEqual(true)
        expect(isValidParentheses('[]')).toEqual(true)
    })

    it('should returns true for complex string', () => {
        expect(isValidParentheses('({a[]})')).toEqual(true)
        expect(isValidParentheses('({[(s{[l]})m]})')).toEqual(true)
        expect(isValidParentheses('({ln[(as({[k]}c))]})')).toEqual(true)
    })

    it('should returns false for complex string', () => {
        expect(isValidParentheses('({[s({a[{]asd})]})')).toEqual(false)
        expect(isValidParentheses('({baz [s ({m[asd]l})n)]})')).toEqual(false)
        expect(isValidParentheses('({[! ([i[]}ias), )]}})')).toEqual(false)
    })
})