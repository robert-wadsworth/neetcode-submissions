class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const cache = new Set();
        
        for(let i = 0; i < nums.length; i++) {
            const n = nums[i];
            if (cache.has(n)) {
                return true;
            }
            cache.add(n);
        }

        return false;
    }
}
