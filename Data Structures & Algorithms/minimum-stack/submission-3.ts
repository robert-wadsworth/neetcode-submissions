class MinStack {
    stack: number[]
    minStack: number[]
    size: number;

    constructor() {
        this.stack = [];
        this.minStack = [];
        this.size = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        // stack: 5, 0, 2, 4
        // minstack: 5, 0, 0, 0
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
        }
        
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        const top: number = this.stack.pop();
        if (top >= this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
