class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        for(let i = 0; i < s.length; i++) {
            const c = s[i];
            const n = stack.length;
            if (c === ')') {
                const top = stack.pop();
                if (top !== '(') {
                    return false;
                }
            } else if (c === ']') {
                const top = stack.pop();
                if (top !== '[') {
                    return false;
                }
            } else if (c === '}') {
                const top = stack.pop();
                if (top !== '{') {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
