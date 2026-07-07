class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (Object.hasOwn(map, num)) {
                return true;
            }
            
            map[num] = true;
        }
        return false;
    }
}
