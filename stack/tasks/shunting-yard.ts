import {Stack} from "../stack";
import {CLOSE_PARENTHESIS, isOperation, OPEN_PARENTHESIS, Operation, Operators, OPERATORS_META} from "./constants";

export const shuntingYard = (s: string) => {
    const stack = new Stack<Operators>()

    const expression = s.split(' ')
    let output: string = ''

    for (let i = 0; i < expression.length; i++) {
        const token = expression[i]
        if (isOperation(token)) {
            const currentTokenMeta = OPERATORS_META[token]

            while (isOperation(stack.top()!) && (currentTokenMeta.assoc === "left" && currentTokenMeta.prec <= OPERATORS_META[stack.top()! as Operation].prec) || (currentTokenMeta.assoc === "right" && currentTokenMeta.prec < OPERATORS_META[stack.top()! as Operation].prec)) {
                output += ` ${stack.pop()}`
            }

            stack.push(token)
        } else if (token === OPEN_PARENTHESIS) {
            stack.push(token)
        } else if (token === CLOSE_PARENTHESIS) {
            while (stack.top() !== OPEN_PARENTHESIS) {
                output += ` ${stack.pop()}`
            }

            stack.pop() // remove open parenthesis
        } else {
            output += ` ${token}`
        }
    }

    while (!stack.isEmpty()) {
        output += ` ${stack.pop()}`
    }

    return output.trim()
}
