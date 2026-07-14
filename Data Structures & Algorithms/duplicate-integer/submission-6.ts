class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const cache: Set<number> = new Set();

        for(let i: number = 0; i < nums.length; i++) {
            const n: number = nums[i];
            if (cache.has(n)) {
                return true;
            }
            cache.add(n);
        }
        return false;
    }
}
