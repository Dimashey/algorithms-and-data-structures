import {Stack} from "../stack";
import {CLOSE_PARENTHESIS, OPEN_PARENTHESIS} from "./constants";

const OPEN_SQUARE_BRACKET = '['
const CLOSE_SQUARE_BRACKET = ']'

const OPEN_BRACKET = '{'
const CLOSE_BRACKET = '}'

const OPEN_PARENTHESES = [OPEN_PARENTHESIS, OPEN_SQUARE_BRACKET, OPEN_BRACKET]
const CLOSE_PARENTHESES = [CLOSE_PARENTHESIS, CLOSE_SQUARE_BRACKET, CLOSE_BRACKET]

const CLOSE_PARENTHESIS_MAP: Record<string, string> = {
    [CLOSE_PARENTHESIS]: OPEN_PARENTHESIS,
    [CLOSE_SQUARE_BRACKET]: OPEN_SQUARE_BRACKET,
    [CLOSE_BRACKET]: OPEN_BRACKET
}

export const isValidParentheses = (
    s: string
): boolean => {
    const stack = new Stack<string>()

    if (CLOSE_PARENTHESES.includes(s[0])) return false

    for (let i = 0; i < s.length; i++) {
        const parenthesis = s[i]

        if (OPEN_PARENTHESES.includes(parenthesis)) {
            stack.push(parenthesis)
        } else if (CLOSE_PARENTHESES.includes(parenthesis)) {
            if (CLOSE_PARENTHESIS_MAP[parenthesis] !== stack.pop()) return false
        }
    }

    return stack.isEmpty()
}