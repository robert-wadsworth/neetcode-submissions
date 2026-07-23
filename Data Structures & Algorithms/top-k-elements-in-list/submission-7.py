class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1)]

        for n in nums:
            if n not in count:
                count[n] = 0

            count[n] += 1

        for n, count in count.items():
            freq[count].append(n)

        res = []
        R = len(freq) - 1
        print(freq)
        while R >= 0:
            for n in freq[R]:
                res.append(n)
                if len(res) == k:
                    return res
            R -= 1

        return res
