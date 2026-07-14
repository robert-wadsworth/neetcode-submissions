/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let lo = 1;
        let hi = n;

        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);
            const res = guess(mid);
            if (res < 0) {
                hi = mid - 1;
            } else if (res > 0) {
                lo = mid + 1;
            } else {
                return mid;
            }
        }
    }
}
