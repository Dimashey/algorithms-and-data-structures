import {describe, expect, it} from "@jest/globals";
import {Stack} from "./stack";

describe('stacks', () => {
    it('should add element to the stack', () => {
        const stack = new Stack<number>()

        stack.push(1)
        stack.push(2)
        stack.push(3)

        expect(stack.size()).toEqual(3)
    })

    it('should get element from the stack', () => {
        const stack = new Stack<number>()

        stack.push(1)
        stack.push(2)
        stack.push(3)

        expect(stack.pop()).toEqual(3)
        expect(stack.pop()).toEqual(2)
        expect(stack.size()).toEqual(1)
    })

    it('should get top element', () => {
        const stack = new Stack<number>()

        stack.push(1)
        stack.push(2)

        expect(stack.top()).toEqual(2)
    })

    it('should returns if stack is empty', () => {
        const stack = new Stack<number>()

        expect(stack.isEmpty()).toEqual(true)

        stack.push(1)

        expect(stack.isEmpty()).toEqual(false)

        stack.pop()

        expect(stack.isEmpty()).toEqual(true)
    })
})