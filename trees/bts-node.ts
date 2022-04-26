import {Nullable} from "../types";

export class BtsNode<T> {
    value: T
    left: Nullable<BtsNode<T>>
    right: Nullable<BtsNode<T>>

    constructor(value: T, left: Nullable<BtsNode<T>> = null, right: Nullable<BtsNode<T>> = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}