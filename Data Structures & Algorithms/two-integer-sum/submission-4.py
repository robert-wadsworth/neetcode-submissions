class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        L = 0
        R = len(nums) - 1

        complements = {}

        for i, n in enumerate(nums):
            c = target - n

            if c in complements:
                return [complements[c], i]

            complements[n] = i

        return []
