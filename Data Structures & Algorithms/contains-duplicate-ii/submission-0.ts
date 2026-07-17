class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        const window = new Set<number>();
        let L = 0;
        let R = 0;

        while (R < nums.length) {
            if (R - L > k) {
                window.delete(nums[L++]);
            }

            if (window.has(nums[R])) {
                return true;
            }
            window.add(nums[R++]);
        }
        return false;
    }
}
