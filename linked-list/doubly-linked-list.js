"use strict";
exports.__esModule = true;
exports.DoublyLinkedList = void 0;
var DoublyLinkedListNode = /** @class */ (function () {
    function DoublyLinkedListNode(value, next, prev) {
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    return DoublyLinkedListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        var _this = this;
        this.isEmpty = function () { return _this.count === 0; };
        this.addHead = function (value) {
            var node = new DoublyLinkedListNode(value, _this.head, null);
            if (_this.head)
                _this.head.prev = node;
            _this.head = node;
            if (!_this.tail)
                _this.tail = _this.head;
            _this.count++;
        };
        this.addTail = function (value) {
            var node = new DoublyLinkedListNode(value, null, _this.tail);
            if (!_this.tail)
                return _this.addHead(value);
            _this.tail.next = node;
            _this.tail = node;
            _this.count++;
        };
        this.remove = function (cb) {
            var node = _this.find(cb);
            if (!node && _this.isEmpty())
                return false;
            var nextNode = node === null || node === void 0 ? void 0 : node.next;
            var prevNode = node === null || node === void 0 ? void 0 : node.prev;
            if (!prevNode && nextNode) {
                _this.head = nextNode;
                _this.head.prev = null;
            }
            if (!nextNode && prevNode) {
                _this.tail = prevNode;
                _this.tail.next = null;
            }
            if (nextNode && prevNode) {
                nextNode.prev = prevNode;
                prevNode.next = nextNode;
            }
            _this.count--;
            return true;
        };
        this.find = function (cb) {
            var current = _this.head || null;
            while (current) {
                if (cb(current)) {
                    return current;
                }
                current = current.next;
            }
            return null;
        };
        this.contains = function (cb) { return _this.find(cb) !== null; };
        this.count = 0;
    }
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
var linkedList = new DoublyLinkedList();
linkedList.addTail(1);
linkedList.addTail(2);
linkedList.addTail(3);
linkedList.addTail(4);
linkedList.addTail(5);
linkedList.addTail(6);
linkedList.addTail(7);
linkedList.find(function (node) { return node.value === 4; });
