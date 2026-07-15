class Solution {
    findTargetIndexes(nums: number[], left: number, right: number, target: number): number[] {
        const indexes = [];
        let l = left;
        let r = right;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] === target) {
                return [m];
            } else if (nums[m] < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return [];
    }

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted: number[] = nums.sort((a, b) => a - b);
        const results = [];

        for (let i = 0; i < sorted.length - 2; i++) {
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;
            
            let l = i + 1;
            let r = sorted.length - 1;
            
            while (l < r) {
                const sum = sorted[i] + sorted[l] + sorted[r];
                if (sum === 0) {
                    results.push([sorted[i], sorted[l], sorted[r]]);
                    while (l < r && sorted[l] === sorted[l + 1]) l++;
                    while (l < r && sorted[r] === sorted[r - 1]) r--;
                    l++;
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return results;
    }
}