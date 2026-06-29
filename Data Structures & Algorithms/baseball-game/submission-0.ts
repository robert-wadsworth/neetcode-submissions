class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const scores = [];
        let sum: number = 0;
        operations.forEach((op, idx) => {
            const n = scores.length;
            switch(op) {
                case '+':
                    // sum previous two
                    const sumVal = scores[n - 1] + scores[n - 2];
                    scores.push(sumVal);
                    sum += sumVal;
                    break;
                case 'D':
                    // double previous score
                    const dblVal = scores[n - 1] * 2;
                    scores.push(dblVal);
                    sum += dblVal;
                    break;
                case 'C':
                    // invalidate previous score
                    const oldVal = scores.pop();
                    sum -= oldVal;
                    break;
                default:
                    // record a new score
                    const newVal = parseInt(op);
                    scores.push(newVal);
                    sum += newVal;
            }
        });
        return sum;
    }
}
