class ListNode {
    data: any
    next: ListNode
    prev: ListNode

    constructor(data = -1, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class MyDeque {
    head: ListNode
    tail: ListNode
    size: number

    constructor() {
        this.head = new ListNode();
        this.tail = new ListNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.size == 0;
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        const node = new ListNode(value, this.tail.prev, this.tail);
        this.tail.prev.next = node;
        this.tail.prev = node;
        this.size += 1;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        const node = new ListNode(value, this.head, this.head.next);
        this.head.next.prev = node;
        this.head.next = node;
        this.size += 1;
    }

    /**
     * @return {void}
     */
    pop(): number {
        if (this.isEmpty()) {
            return -1;
        }

        const node = this.tail.prev;
        node.prev.next = this.tail;
        this.tail.prev = node.prev;
        this.size -= 1;
        return node.data
    }

    /**
     * @return {number}
     */
    popleft(): number {
        if (this.isEmpty()) {
            return -1;
        }

        const node = this.head.next;
        node.next.prev = this.head;
        this.head.next = node.next;
        this.size -= 1;
        return node.data;
    }
}