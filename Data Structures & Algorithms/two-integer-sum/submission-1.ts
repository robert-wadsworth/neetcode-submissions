class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const cache = {};

        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const complement = target - num;
            if (Object.hasOwn(cache, num)) {
                return [cache[num], i];
            }
            cache[complement] = i;
        }

        return [];
    }
}
