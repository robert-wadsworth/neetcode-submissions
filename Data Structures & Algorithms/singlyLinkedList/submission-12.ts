class ListNode {
    data: any
    next: ListNode

    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }

}

class LinkedList {
    head: ListNode
    tail: ListNode
    size: number

    constructor() {
        this.head = new ListNode();
        this.tail = this.head;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index >= this.size) {
            return -1;
        }

        let curr = this.head.next;
        let i = 0;

        while(curr) {
            if (i === index) {
                return curr.data;
            }
            curr = curr.next;
            i += 1;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const node = new ListNode(val, this.head.next);
        this.head.next = node;
        this.size += 1;

        if (node.next === null) {
            this.tail = node;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
        this.size += 1;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (index >= this.size) {
            return false;
        }

        let curr = this.head;
        let i = 0;

        while(i < index && curr) {
            curr = curr.next;
            i += 1;
        }

        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            this.size -= 1;
            return true;
        }
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        let curr = this.head.next;
        let result = [];
        while(curr) {
            result.push(curr.data);
            curr = curr.next;
        }
        return result;
    }
}
