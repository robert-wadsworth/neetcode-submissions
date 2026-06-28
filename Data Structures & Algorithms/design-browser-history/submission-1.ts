class ListNode {
    url: string;
    prev: ListNode;
    next: ListNode;

    constructor(url: string = "", prev: ListNode = null, next: ListNode = null) {
        this.url = url;
        this.prev = prev;
        this.next = next;
    }
}

class BrowserHistory {
    head: ListNode;
    tail: ListNode;
    curr: ListNode;

    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage: string) {
        this.head = new ListNode();
        this.curr = this.head;
        this.tail = new ListNode(null, this.curr, null);
        this.visit(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url: string): void {
        const node = new ListNode(url, this.curr, this.tail);
        this.tail.prev = node;
        this.curr.next = node;
        this.curr = this.curr.next;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps: number): string {
        let i: number = steps;
        while(this.curr !== this.head.next && i > 0) {
            this.curr = this.curr.prev;
            i -= 1;
        }
        return this.curr.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps: number): string {
        let i: number = steps;
        while(this.curr !== this.tail.prev && i > 0) {
            this.curr = this.curr.next;
            i -= 1;
        }
        return this.curr.url;
    }
}
