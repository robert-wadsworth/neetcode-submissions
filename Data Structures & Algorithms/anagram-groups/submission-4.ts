class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const cache: { [key: string]: string[] } = {};

        for (const s of strs) {
            const counts: number[] = Array(26).fill(0);
            for (const l of s) {
                counts[l.charCodeAt(0) - "a".charCodeAt(0)]++;
            }

            const key: string = counts.join(",");
            if (!Object.hasOwn(cache, key)) {
                cache[key] = [];
            }
            cache[key].push(s);
        }
        return Object.values(cache);
    }
}
