import {Stack} from "../stack";
import {isOperation} from "./constants";
import {isStringNumber} from "./utils";

type Operation = (op1: number, op2: number) => number

const OPERATIONS: Record<string, Operation> = {
    '+': (op1: number, op2: number): number => op1 + op2,
    '-': (op1: number, op2: number): number => op2 - op1,
    '/': (op1: number, op2: number): number => op2 / op1,
    '*': (op1: number, op2: number): number => op1 * op2,
}


export const evaluateReversePolishNotation = (s: string): number => {
    const stack = new Stack<number>()
    const expression = s.split(' ')

    expression.forEach(token => {
        if (isStringNumber(token)) {
            stack.push(parseInt(token))
        } else if (isOperation(token)) {
            const operation = OPERATIONS[token]

            const result = operation(stack.pop()!, stack.pop()!)

            stack.push(result)
        }
    })

    return stack.pop()!
}