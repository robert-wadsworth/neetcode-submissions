class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const counts = {};

        for (let i = 0; i < s.length; i++) {
            const l = s[i];
            const r = t[i];

            if (Object.hasOwn(counts, l)) {
                counts[l]++;
            } else {
                counts[l] = 1;
            }

            if (Object.hasOwn(counts, r)) {
                counts[r]--;
            } else {
                counts[r] = -1;
            }
        }

        return Object.values(counts).every((n) => n === 0);
    }
}
