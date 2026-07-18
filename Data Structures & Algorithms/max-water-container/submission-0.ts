class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxWater: number = 0;
        let currWater: number = 0;
        let L: number = 0;
        let R: number = heights.length - 1;

        while (L < R) {
            const width: number = R - L;
            const height: number = Math.min(heights[L], heights[R]);
            currWater = height * width;
            
            maxWater = Math.max(currWater, maxWater);

            if (heights[L] < heights[R]) {
                L++;
            } else {
                R--;
            }
        }
        return maxWater;
    }
}
