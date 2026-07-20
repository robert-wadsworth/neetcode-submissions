class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        res = 0
        cnt = 0

        for n in nums:
            if n == 1:
                cnt += 1
            else:
                res = max(res, cnt)
                cnt = 0

        return max(cnt, res)
