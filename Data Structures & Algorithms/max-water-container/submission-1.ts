class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max: number = 0;
        let L: number = 0;
        let R: number = heights.length - 1;

        while (L < R) {
            const width: number = R - L;
            const height: number = Math.min(heights[L], heights[R]);
            const area: number = height * width;

            max = Math.max(area, max);
            if (heights[L] < heights[R]) {
                L++;
            } else {
                R--;
            }
        }

        return max;
    }
}
