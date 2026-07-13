class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const complements = {};

        for(let i = 0; i < nums.length; i++) {
            const n: number = nums[i];
            const c: number = target - n;
            
            if (Object.hasOwn(complements, n)) {
                return [complements[n], i];
            }
            complements[c] = i;
        }
        return [];
    }
}
