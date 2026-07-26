class Solution:
    def isPalindrome(self, s: str) -> bool:
        s_lower = s.lower()
        l, r = 0, len(s_lower) - 1

        while l < r:
            while l < r and not s_lower[l].isalnum():
                l += 1
            
            while l < r and not s_lower[r].isalnum():
                r -= 1

            if s_lower[l] != s_lower[r]:
                return False

            l += 1
            r -= 1

        return True
        