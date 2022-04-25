import {DoublyLinkedList} from "../linked-list/doubly-linked-list";
import {Nullable} from "../types";

export class Deque<T> {
    private readonly store: DoublyLinkedList<T>

    constructor() {
        this.store = new DoublyLinkedList<T>()
    }

    public enqueueHead = (value: T): void => this.store.addHead(value)

    public enqueueTail = (value: T): void => this.store.addTail(value)

    public dequeueHead = (): Nullable<T> => this.store.removeHead()

    public dequeueTail = (): Nullable<T> => this.store.removeTail()

    public getHead = (): Nullable<T> => this.store.head?.value || null

    public getTail = (): Nullable<T> => this.store.tail?.value || null

    public dequeForEach = (cb: (v: T) => void): void => this.store.forEach(node => cb(node.value))

    get count() {
        return this.store.count
    }

    get head() {
        return this.store.head
    }

    get tail() {
        return this.store.tail
    }
}

