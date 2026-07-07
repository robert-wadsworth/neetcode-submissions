class ListNode {
    data: any
    next: ListNode|null

    constructor(data: any = null, next: ListNode|null = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    head: ListNode|null
    tail: ListNode|null
    size: number

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1;
        }

        let curr: ListNode|null = this.head;
        let i: number = 0;

        while(curr) {
            if (i === index) {
                return curr.data;
            }
            curr = curr.next;
            i++;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const node: ListNode = new ListNode(val);
        
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const node: ListNode = new ListNode(val);

        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (index < 0 || index >= this.size) {
            return false;
        }

        if (index === 0) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return true;
        }

        let curr: ListNode|null = this.head;
        let i: number = 0;

        while(curr && i < index - 1) {
            // stop when i reaches the node before the node at index
            curr = curr.next;
            i++;
        }

        if (curr && curr.next) {
            curr.next = curr.next.next;
            if (curr.next === null) {
                this.tail = curr;
            }
        }

        this.size--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const result: number[] = [];
        let curr: ListNode|null = this.head;
        
        while(curr) {
            result.push(curr.data);
            curr = curr.next;
        }
        
        return result;
    }
}
