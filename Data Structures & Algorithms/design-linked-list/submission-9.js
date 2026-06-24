class ListNode {
    constructor(val = 0, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
class MyLinkedList {
    constructor() {
        this.head = new ListNode()
        this.tail = new ListNode()
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getNode(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let curr = this.head.next;
        let i = 0;

        while(curr !== this.tail) {
            if (i === index) {
                return curr;
            }
            curr = curr.next;
            i = i + 1;
        }
        return null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        const node = this.getNode(index);
        return node ? node.val : -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const next = this.head.next;
        const node = new ListNode(val, this.head, next);
        this.head.next = node;
        next.prev = node;
        this.size = this.size + 1;
    }

    /**
     * @param {number} val
     * @return {void}Entry
     */
    addAtTail(val) {
        const prev = this.tail.prev;
        const node = new ListNode(val, prev, this.tail);
        this.tail.prev = node;
        prev.next = node;
        this.size = this.size + 1;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size) {
            return;
        }
        if (index <= 0) {
            this.addAtHead(val);
            return;
        } else if (index === this.size) {
            this.addAtTail(val);
            return;
        }
        
        const nodeAtIndex = this.getNode(index);
        if (nodeAtIndex) {
            const prev = nodeAtIndex.prev;
            const node = new ListNode(val, prev, nodeAtIndex);
            prev.next = node;
            nodeAtIndex.prev = node;
            this.size = this.size + 1;
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        const nodeAtIndex = this.getNode(index);
        if(nodeAtIndex) {
            const next = nodeAtIndex.next;
            const prev = nodeAtIndex.prev;
            prev.next = next;
            next.prev = prev;
            this.size = this.size - 1;
        }
    }
}