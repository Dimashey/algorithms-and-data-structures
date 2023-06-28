import {Deque} from "../deque/deque";
import {Nullable} from "../types";

export class Stack<T> {
    private store: Deque<T>

    constructor() {
        this.store = new Deque<T>()
    }

    push = (v: T): void => this.store.enqueueHead(v)

    pop = (): Nullable<T> => this.store.dequeueHead()

    top = (): Nullable<T> => this.store.head?.value || null

    size = (): number => this.store.count

    isEmpty = (): boolean => this.store.count === 0
}