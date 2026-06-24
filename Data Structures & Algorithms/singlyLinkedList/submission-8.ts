class ListNode {
    val: any;
    next: any;

    constructor(val?: any, nextNode = null) {
        this.val = val;
        this.next = nextNode;
    }
}

class LinkedList {
    head: any;
    tail: any;

    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let curr = this.head.next;
        let i = 0;
        
        while(curr) {
            if (i == index) {
                return curr.val;
            }
            curr = curr.next;
            i += 1;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const node = new ListNode(val, this.head.next);
        this.head.next = node;
        
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
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        let curr = this.head;
        let i = 0;

        while(i < index && curr) {
            i++;
            curr = curr.next;
        }

        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        let values = [];
        let curr = this.head.next;
        while(curr) {
            values = [...values, curr.val];
            curr = curr.next;
        }
        return values;
    }
}
