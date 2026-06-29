class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        const n: number = arr.length;
        const out: number[] = new Array(n);
        let rightMax: number = -1;
        
        for(let i = n - 1; i >= 0; i--) {
            out[i] = rightMax;
            rightMax = Math.max(rightMax, arr[i]);
        }
        return out;
    }
}
