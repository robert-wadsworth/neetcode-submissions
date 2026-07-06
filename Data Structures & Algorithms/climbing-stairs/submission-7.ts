class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let one = 1;
        let two = 1;
        let i = n - 2;

        while (i >= 0) {
            const temp = one;
            one = one + two;
            two = temp;
            i = i - 1;
        }

        return one;
    }
}
