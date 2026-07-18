class Solution {
    calculate(a: number, b: number, op: string): number {
        let res = null;
        if (op === "+") {
            res = a + b;
        } else if (op === "-") {
            res = b - a;
        } else if (op === "*") {
            res = a * b;
        } else if (op === "/") {
            res = Math.trunc(b / a);
        }
        return res;
    }

    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        let res = null;

        for (let t of tokens) {
            const parsed = parseInt(t);
            if (isNaN(parsed)) {
                res = this.calculate(stack.pop(), stack.pop(), t);
                stack.push(res);
            } else {
                stack.push(parsed);
            }
        }

        return stack.pop();
    }
}
