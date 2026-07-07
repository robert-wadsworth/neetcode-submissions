class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max = 0;
        let curr = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                curr++;
            } else {
                if (curr > max) {
                    max = curr;
                }
                curr = 0;
            }
        }

        return curr > max ? curr : max;
    }
}
