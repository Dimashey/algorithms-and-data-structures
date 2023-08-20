import {describe, expect, it} from "@jest/globals";
import {Queue} from "./queue";

describe('queue', () => {
    it('should enqueue elements to the queue', () => {
        const queue = new Queue<number>()

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        expect(queue.size()).toEqual(3)
        expect(queue.front()).toEqual(1)
        expect(queue.rear()).toEqual(3)
    })

    it('should dequeue element from the queue', () => {
        const queue = new Queue<number>()

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        expect(queue.dequeue()).toEqual(1)

        expect(queue.size()).toEqual(2)
        expect(queue.front()).toEqual(2)
        expect(queue.rear()).toEqual(3)
    })

    it('should returns true if queue is empty', () => {
        const queue = new Queue<number>()

        expect(queue.isEmpty()).toEqual(true)

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        expect(queue.isEmpty()).toEqual(false)


        expect(queue.dequeue()).toEqual(1)
        expect(queue.dequeue()).toEqual(2)
        expect(queue.dequeue()).toEqual(3)

        expect(queue.isEmpty()).toEqual(true)
    })
})