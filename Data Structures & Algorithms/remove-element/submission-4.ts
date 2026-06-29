class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let left: number = 0;
        let right: number = nums.length - 1;
        let k = 0;

        while(left <= right) {
            if(nums[left] === val && nums[right] !== val) {
                nums[left] = nums[right];
                nums[right] = val;
            }

            if(nums[right] === val) {
                nums[right] = null;
                right -= 1;
            }

            if(nums[left] !== val && nums[left] !== null) {
                left += 1;
                k += 1;
            }
        }

        console.log(k, nums);
        return k;
    }
}
