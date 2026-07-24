class Solution:
    def isPalindrome(self, s: str) -> bool:
        L = 0
        R = len(s) - 1
        s = s.lower()

        while L < R:
            while L < len(s) and not s[L].isalnum():
                L += 1
            
            while R >= 0 and not s[R].isalnum():
                R -= 1

            if L < R and s[L] != s[R]:
                print(f'{s[L]} {s[R]}')
                return False
            
            L += 1
            R -= 1

        return True
        