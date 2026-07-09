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
    mergeSort(pairs: Pair[]): Pair[] {
        this.mergesort(pairs, 0, pairs.length - 1);
        return pairs;
    }

    mergesort(pairs: Pair[], s: number, e: number) {
        if (e - s + 1 <= 1) return;

        let m = Math.floor((e + s) / 2);
        this.mergesort(pairs, s, m);
        this.mergesort(pairs, m + 1, e);
        this.merge(pairs, s, m, e);
    }

    merge(pairs: Pair[], s: number, m: number, e: number) {
        const left = pairs.slice(s, m + 1);
        const right = pairs.slice(m + 1, e + 1);

        let i = 0;
        let j = 0;
        let k = s;

        while (i < left.length && j < right.length) {
            if (left[i].key <= right[j].key) {
                pairs[k] = left[i];
                i++;
            } else {
                pairs[k] = right[j];
                j++;
            }
            k++;
        }

        while (i < left.length) {
            pairs[k] = left[i];
            i++;
            k++;
        }

        while (j < right.length) {
            pairs[k] = right[j];
            j++;
            k++;
        }
    }
}
