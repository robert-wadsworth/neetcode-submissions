class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l: number = 1;
        let r: number = Math.max(...piles);
        let res = r;

        while (l <= r) {
            const k: number = Math.floor((l + r) / 2);
            let hours: number = 0;
            for(const p of piles) {
                hours += Math.ceil(p / k);
            }
            if (hours <= h) {
                res = Math.min(res, k);
                r = k - 1;
            } else {
                l = k + 1;
            }
            console.log(k, hours)
        }

        return res;
    }
}
