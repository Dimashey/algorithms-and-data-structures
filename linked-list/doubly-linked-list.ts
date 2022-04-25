import {Nullable} from "../types";

class DoublyLinkedListNode<T> {
    public value: T
    public next: Nullable<DoublyLinkedListNode<T>>
    public prev: Nullable<DoublyLinkedListNode<T>>

    constructor(value: T, next: DoublyLinkedListNode<T> | null = null, prev: DoublyLinkedListNode<T> | null = null) {
        this.value = value
        this.next = next
        this.prev = prev
    }
}

type CheckingNodeFunction<T> = (node: DoublyLinkedListNode<T>) => boolean
type NodeHandleFunction<T> = (node: DoublyLinkedListNode<T>) => void

export class DoublyLinkedList<T> {
    public head: Nullable<DoublyLinkedListNode<T>>
    public tail: Nullable<DoublyLinkedListNode<T>>
    public count: number

    constructor() {
        this.count = 0
        this.head = null
        this.tail = null
    }

    protected isEmpty = (): boolean => !(this.head && this.tail)

    public removeHead = (): Nullable<T> => {
        if (!(this.head && this.tail)) return null
        if (!(this.head.next && this.tail.prev)) {
            const head = this.head
            this.head = null
            this.tail = null

            return head.value
        }

        const oldHead = this.head
        this.head = this.head.next
        this.head.prev = null

        return oldHead.value
    }

    public removeTail = (): Nullable<T> => {
        if (!(this.head && this.tail)) return null
        if (!(this.head.next && this.tail.prev)) {
            const tail = this.tail
            this.head = null
            this.tail = null

            return tail.value
        }

        const oldTail = this.tail
        this.tail = this.tail.prev
        this.tail.next = null

        return oldTail.value
    }

    public addHead = (value: T): void => {
        const node = new DoublyLinkedListNode<T>(value, this.head, null)

        if (this.head) this.head.prev = node

        this.head = node

        if (!this.tail) this.tail = this.head

        this.count++
    }

    public addTail = (value: T): void => {
        const node = new DoublyLinkedListNode<T>(value, null, this.tail)

        if (!this.tail) return this.addHead(value)

        this.tail.next = node

        this.tail = node

        this.count++
    }

    public remove = (cb: CheckingNodeFunction<T>): boolean => {
        const node = this.find(cb)
        if (!node && this.isEmpty()) return false

        const nextNode = node?.next
        const prevNode = node?.prev

        if (!prevNode && nextNode) {
            this.head = nextNode
            this.head.prev = null
        }

        if (!nextNode && prevNode) {
            this.tail = prevNode
            this.tail.next = null
        }

        if (nextNode && prevNode) {
            nextNode.prev = prevNode
            prevNode.next = nextNode
        }

        this.count--
        return true
    }

    public find = (cb: CheckingNodeFunction<T>): DoublyLinkedListNode<T> | null => {
        let current: DoublyLinkedListNode<T> | null = this.head || null

        while (current) {
            if (cb(current)) {
                return current
            }

            current = current.next
        }

        return null
    }

    public contains = (cb: CheckingNodeFunction<T>): boolean => this.find(cb) !== null


    private iteration = (cb: NodeHandleFunction<T>, startEntity: 'head' | 'tail', key: 'next' | 'prev'): void => {
        let current: DoublyLinkedListNode<T> | null = this[startEntity] || null

        while (current) {
            cb(current)

            current = current[key]
        }

    }

    public forEach = (cb: NodeHandleFunction<T>): void => this.iteration(cb, 'head', 'next')

    public reversedForEach = (cb: NodeHandleFunction<T>): void => this.iteration(cb, 'tail', 'prev');
}


export class SortedLinkedList extends DoublyLinkedList<number> {
    constructor() {
        super();
    }

    sort = (prev: number, next: number) => prev - next

    addSorted = (value: number): void => {
        if (!(this.head && this.tail)) return this.addHead(value)
        if (this.sort(value, this.head.value) <= 0) return this.addHead(value)
        if (this.sort(value, this.tail.value) > 0) return this.addTail(value)

        let current = this.head

        while (this.sort(value, current.value) > 0) {
            current = current.next!
        }

        const node = new DoublyLinkedListNode(value, current, current.prev)
        current.prev!.next = node
        current.prev = node
    }
}