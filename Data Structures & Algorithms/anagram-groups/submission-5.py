class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = {}

        for s in strs:
            counts = [0] * 26

            for c in s:
                counts[ord(c) - ord('a')] += 1
            
            key = ','.join([str(c) for c in counts])

            if key not in anagrams:
                anagrams[key] = []
                
            anagrams[key].append(s)

        return [val for key, val in anagrams.items()]

