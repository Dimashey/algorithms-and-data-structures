/**
 * Singly Linked List
 * */
class SinglyListNode<T> {
    public value: T;
    public next: SinglyListNode<T> | null;

    constructor(value: T) {
        this.value = value
        this.next = null
    }
}

const node = new SinglyListNode<number>(1)

node.next = new SinglyListNode<number>(2)