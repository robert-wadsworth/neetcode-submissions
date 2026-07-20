class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        rmax = -1
        R = len(arr) - 1

        while R >= 0:
            n = arr[R]
            arr[R] = rmax
            rmax = max(rmax, n)

            R -= 1

        return arr 
        