class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let L: number = 0;
        let R: number = nums.length - 1;

        while (L <= R) {
            const M = Math.floor((R + L) / 2);

            if (nums[M] === target) {
                return M;
            }

            if (nums[L] <= nums[M]) {
                if (target >= nums[L] && target < nums[M]) {
                    R = M - 1;
                } else {
                    L = M + 1;
                }
            } else {
                if (target > nums[M] && target <= nums[R]) {
                    L = M + 1;
                } else {
                    R = M - 1;
                }
            }
        }

        return -1;
    }
}
