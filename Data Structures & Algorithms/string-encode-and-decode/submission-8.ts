class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded: string = '';
        for (const s of strs) {
            const l: number = s.length;
            encoded += `${l}#${s}`;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            
            while (str[j] !== '#') {
                j++;
            }

            const l: number = parseInt(str.substring(i, j));
            i = j + 1;
            let word = str.substring(i, i + l);
            result.push(word);
            i += l;
        }

        return result;
    }
}
