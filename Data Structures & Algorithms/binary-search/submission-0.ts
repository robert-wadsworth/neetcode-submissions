class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l: number = 0;
        let r: number = nums.length - 1;

        while(l <= r) {
            const m: number = Math.floor((r + l) / 2);
            const n: number = nums[m];
            if (target === n) {
                return m;
            } else if (target < n) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return -1;
    }
}
