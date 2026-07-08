class Solution {
    isAnagram(s1: string, s2: string): boolean {
        if (s1.length !== s2.length) {
            return false;
        }
        const cache = {};

        for (let i = 0; i < s1.length; i++) {
            const s1Char = s1[i];
            const s2Char = s2[i];

            if (Object.hasOwn(cache, s1Char)) {
                cache[s1Char]++;
            } else {
                cache[s1Char] = 1;
            }

            if (Object.hasOwn(cache, s2Char)) {
                cache[s2Char]--;
            } else {
                cache[s2Char] = -1;
            }
        }
        return Object.values(cache).every(val => val === 0);
    }
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = [];
        const processed = {};
        
        for(let i = 0; i < strs.length; i++) {
            const word1 = strs[i];
            
            if (processed[word1]) {
                continue;
            }

            const group = [word1];
            processed[word1] = 1;
            for(let j = i + 1; j < strs.length; j++) {
                const word2 = strs[j];
                if (this.isAnagram(word1, word2)) {
                    group.push(word2);
                    processed[word2] = 1;
                }
            }
            anagrams.push(group);
        }

        return anagrams.sort((a, b) => a.length - b.length);
    }
}
