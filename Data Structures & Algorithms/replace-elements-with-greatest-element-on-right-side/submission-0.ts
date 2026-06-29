class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for(let i = 0; i < arr.length; i++) {
            let max = Number.NEGATIVE_INFINITY;
            for(let j = i+1; j < arr.length; j++) {
                max = Math.max(arr[j], max);
            }
            arr[i] = Math.max(max, -1);
        }
        return arr;
    }
}
