class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const results =[]
        for (let i =0; i<nums.length; i++){
            if(results.includes(nums[i])) return true
            else results.push(nums[i])
        }
        return false
    }
}
