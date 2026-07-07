class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Set();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (map.has(num)) {
                return true;
            }
            map.add(num);
        }
        return false;
    }
}
