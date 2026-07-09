/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs: Pair[]): Pair[] {
        return this._quicksort(pairs, 0, pairs.length - 1);
    }

    _quicksort(pairs: Pair[], s: number, e: number): Pair[] {
        if (e - s + 1 <= 1) {
            return pairs;
        }

        const pivot: Pair = pairs[e];
        let left: number = s;

        for (let i = s; i < e; i++) {
            if (pairs[i].key < pivot.key) {
                const tmp: Pair = pairs[left];
                pairs[left] = pairs[i];
                pairs[i] = tmp;
                left++;
            }
        }

        pairs[e] = pairs[left];
        pairs[left] = pivot;
        this._quicksort(pairs, s, left - 1);
        this._quicksort(pairs, left + 1, e);
        return pairs;
    }
}
