class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let maxSum: number = nums[0];
        let currSum: number = 0;
        let L: number = 0;
        let R: number = 0;

        while (R < nums.length) {
            if (currSum < 0) {
                currSum = 0;
                L = R;
            }

            currSum += nums[R];
            if (currSum > maxSum) {
                maxSum = currSum;
            }
            R++;
        }
        
        return maxSum;
    }
}
