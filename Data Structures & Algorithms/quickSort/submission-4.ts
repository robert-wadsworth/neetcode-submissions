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
        this.quicksort(pairs, 0, pairs.length - 1);
        return pairs;
    }

    quicksort(pairs: Pair[], s: number, e: number) {
        if (s > e) {
            return pairs;
        }

        const pivot = pairs[e];
        let left = s;

        for(let i = s; i < e; i++) {
            if (pairs[i].key < pivot.key) {
                const tmp = pairs[left];
                pairs[left] = pairs[i];
                pairs[i] = tmp;
                left++;
            }
        }

        pairs[e] = pairs[left];
        pairs[left] = pivot;

        this.quicksort(pairs, s, left - 1);
        this.quicksort(pairs, left + 1, e);
    }
}
