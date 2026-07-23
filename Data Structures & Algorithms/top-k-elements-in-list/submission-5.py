class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counts = {}

        for n in nums:
            if n not in counts:
                counts[n] = 0

            counts[n] += 1

        keys = list(counts.keys())
        keys.sort(key=lambda x: counts[x], reverse=True)
        
        return keys[:k]


        