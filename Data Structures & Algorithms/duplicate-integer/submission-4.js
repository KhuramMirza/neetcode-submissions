class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Map();
        const results =[]
        for (let i =0; i<nums.length; i++){
            if(seen.has(nums[i])) return true
            else seen.set(nums[i], i)
        }
        return false
    }
}
