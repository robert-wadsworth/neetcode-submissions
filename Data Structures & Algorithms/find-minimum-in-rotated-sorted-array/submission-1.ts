class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let L: number = 0;
        let R: number = nums.length - 1;
        let res = nums[R]

        while(L < R) {
            const M = Math.floor((L + R) / 2);

            if (nums[M] > nums[R]) {
                L = M + 1;
            } else {
                R = M;
                res = Math.min(nums[M], res);
            }
        }
        return res;
    }
}
