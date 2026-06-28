class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxOnes: number = 0;
        let currOnes: number = 0;
        
        nums.forEach((num: number) => {
            if (num === 0) {
                if (currOnes > maxOnes) {
                    maxOnes = currOnes;
                }
                currOnes = 0;
            } else {
                currOnes += 1;
            }
        });

        return currOnes > maxOnes ? currOnes : maxOnes;
    }
}
