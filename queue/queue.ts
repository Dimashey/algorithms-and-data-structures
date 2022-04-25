import {Deque} from "../deque/deque";
import {Nullable} from "../types";

export class Queue<T> {
    private store: Deque<T>

    constructor() {
        this.store = new Deque<T>()
    }

    enqueue = (value: T): void => this.store.enqueueTail(value)

    dequeue = (): Nullable<T> => this.store.dequeueHead()

    get head() {
        return this.store.head
    }

    get count() {
        return this.store.count
    }
}

