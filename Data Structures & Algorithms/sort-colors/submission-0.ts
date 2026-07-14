class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const counts: number[] = new Array(3).fill(0);

        for(let i: number = 0; i < nums.length; i++) {
            counts[nums[i]]++;
        }

        let k: number = 0;
        for(let i: number = 0; i < counts.length; i++) {
            for(let j: number = 0; j < counts[i]; j++) {
                nums[k++] = i;
            }
        }
    }
}
