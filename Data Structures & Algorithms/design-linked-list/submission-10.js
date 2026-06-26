class ListNode {
    constructor(val = 0, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new ListNode(-1); // sentinel head
        this.tail = new ListNode(-1); // sentinel tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    /**
     * Returns the node just before the node at `index`.
     * index 0 → returns sentinel head
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) return -1;
        return this.getPrev(index).next.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.addAtIndex(0, val);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.addAtIndex(this.size, val);
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) return;

        const prev = this.getPrev(index);
        const next = prev.next;
        const node = new ListNode(val, prev, next);
        prev.next = node;
        next.prev = node;
        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return;

        const prev = this.getPrev(index);
        const target = prev.next;
        const next = target.next;
        prev.next = next;
        next.prev = prev;
        this.size--;
    }
}