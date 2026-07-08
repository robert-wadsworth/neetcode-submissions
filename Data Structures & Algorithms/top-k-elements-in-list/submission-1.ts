class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = {};

        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            if (Object.hasOwn(frequency, n)) {
                frequency[n]++;
            } else {
                frequency[n] = 1;
            }
        }

        const result = Object.entries(frequency)
            .sort((a, b) => (b[1] as number) - (a[1] as number))
            .slice(0, k)
            .map((pairs) => Number(pairs[0]));

        return result;
    }
}
