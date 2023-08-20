import {Deque} from "../deque/deque";
import {Nullable} from "../types";

export class Queue<T> {
    private store: Deque<T>

    constructor() {
        this.store = new Deque<T>()
    }

    enqueue = (value: T): void => this.store.enqueueTail(value)

    dequeue = (): Nullable<T> => this.store.dequeueHead()

    front = () => this.store.head?.value

    rear = () => this.store.tail?.value

    isEmpty = () => this.store.count === 0

    size = () => this.store.count
}

