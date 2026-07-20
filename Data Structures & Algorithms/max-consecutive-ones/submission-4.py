class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        max_ones = 0
        curr = 0

        for n in nums:
            if n == 1:
                curr += 1
            else:
                max_ones = max(curr, max_ones)
                curr = 0
        
        return max(curr, max_ones)
        