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
    merge(pairs: Pair[], start: number, mid: number, end: number) {
        const left = pairs.slice(start, mid + 1);
        const right = pairs.slice(mid + 1, end + 1);

        let i = 0; 
        let j = 0;
        let k = start;

        while(i < left.length && j < right.length) {
            if (left[i].key <= right[j].key) {
                pairs[k] = left[i];
                i++;
            } else {
                pairs[k] = right[j];
                j++;
            }
            k++;
        }

        while(i < left.length) {
            pairs[k] = left[i];
            i++;
            k++;
        }
        while(j < right.length) {
            pairs[k] = right[j];
            j++;
            k++;
        }
    }

    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs: Pair[]): Pair[] {
        return this.recursiveSort(pairs, 0, pairs.length - 1);
    }

    private recursiveSort(pairs: Pair[], start: number, end: number): Pair[] {
        if(start >= end) {
            return pairs;
        }
        
        const mid = Math.floor((start + end) / 2);

        this.recursiveSort(pairs, start, mid);
        this.recursiveSort(pairs, mid + 1, end);

        this.merge(pairs, start, mid, end);

        return pairs;
    }
}
