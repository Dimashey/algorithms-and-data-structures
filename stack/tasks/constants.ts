export const OPERATORS_META = {
    "^": {prec: 4, assoc: 'right'},
    "*": {prec: 3, assoc: 'left'},
    "/": {prec: 3, assoc: 'left'},
    "+": {prec: 2, assoc: 'left'},
    "-": {prec: 2, assoc: 'left'},
}

export const isOperation = (s: string): s is keyof typeof OPERATORS_META => s in OPERATORS_META

export type Operation = keyof typeof OPERATORS_META

export const OPEN_PARENTHESIS = '('
export const CLOSE_PARENTHESIS = ')'

export const PARENTHESES = [OPEN_PARENTHESIS, CLOSE_PARENTHESIS] as const

export type Parenthesis = typeof PARENTHESES[number]

export type Operators = Operation | Parenthesis

