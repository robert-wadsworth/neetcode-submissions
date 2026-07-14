class Solution {
    findRow(matrix: number[][], target: number): number[]|null {
        for (const row of matrix) {
            if (row[0] <= target && row[row.length - 1] >= target) {
                return row;
            }
        }
        return null;
    }

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const row = this.findRow(matrix, target);

        if (row) {
            let l = 0;
            let r = row.length - 1;
            while (l <= r) {
                const m = Math.floor((l + r) / 2);
                const n = row[m];

                if (n === target) {
                    return true;
                } else if (target < n) {
                    r = m - 1;
                } else {
                    l = l + 1;
                }
            }
        }

        return false;
    }
}
