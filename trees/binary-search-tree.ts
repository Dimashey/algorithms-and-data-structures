import {BtsNode} from "./bts-node";
import {Nullable} from "../types";

export class BinarySearchTree<T> {
    private readonly root: BtsNode<T>

    constructor(value: T, left: Nullable<BtsNode<T>>, right: Nullable<BtsNode<T>>) {
        this.root = new BtsNode<T>(value, left, right)
    }

    preOrderTraversal = (cb: (value: T) => void, node: Nullable<BtsNode<T>> = this.root) => {
        if (node) {
            cb(node.value)
            this.preOrderTraversal(cb, node.left)
            this.preOrderTraversal(cb, node.right)
        }
    }

    inOrderTraversal = (cb: (value: T) => void, node: Nullable<BtsNode<T>>) => {
        if (node) {
            this.inOrderTraversal(cb, node.left)
            cb(node.value)
            this.inOrderTraversal(cb, node.right)
        }
    }

    postOrderTraversal = (cb: (value: T) => void, node: Nullable<BtsNode<T>>) => {
        if (node) {
            this.postOrderTraversal(cb, node.left)
            this.postOrderTraversal(cb, node.right)
            cb(node.value)
        }
    }
}