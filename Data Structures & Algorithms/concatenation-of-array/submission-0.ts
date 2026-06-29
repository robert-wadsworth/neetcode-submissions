class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const length = nums.length;
        const arr: number[] = Array.from({ length });
        nums.forEach((element, index) => {
            arr[index] = element;
            arr[index+length] = element;
        });
        return arr;
    }
}
