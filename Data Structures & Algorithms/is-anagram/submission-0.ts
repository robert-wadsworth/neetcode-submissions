class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const map = {};
        for (let i = 0; i < s.length; i++) {
            const sLetter = s[i];
            const tLetter = t[i];
            
            if (Object.hasOwn(map, sLetter)) {
                map[sLetter]++;
            } else {
                map[sLetter] = 1;
            }

            if (Object.hasOwn(map, tLetter)) {
                map[tLetter]--;
            } else {
                map[tLetter] = -1;
            }
        }

        console.log(map);
        console.log(Object.values(map));
        return Object.values(map).every(element => element === 0);
    }
}
