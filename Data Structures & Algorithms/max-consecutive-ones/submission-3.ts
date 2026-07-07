class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max = 0;
        let curr = 0;

        nums.forEach((num) => {
            if (num === 1) {
                curr++;
            } else {
                max = Math.max(curr, max);
                curr = 0;
            }
        });

        return Math.max(curr, max);
    }
}
