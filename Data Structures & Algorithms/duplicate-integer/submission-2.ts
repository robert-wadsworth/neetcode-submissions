class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            if (Object.hasOwn(map, nums[i])) {
                return true;
            }

            map[nums[i]] = true;
        }
        return false;
    }
}
