class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const seen = {};
        let l = 0;
        let r = numbers.length - 1;

        while(l <= r) {
            const leftComplement = target - numbers[l];
            
            while(numbers[r] > leftComplement) r--;

            if (numbers[r] === leftComplement) {
                return [l + 1,r + 1];
            } else {
                l++;
            }
        }
    }
}
