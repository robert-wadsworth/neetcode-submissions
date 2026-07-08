class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const text = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        let left = 0;
        let right = text.length - 1;

        while (left <= right) {
            if (text[left] !== text[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
