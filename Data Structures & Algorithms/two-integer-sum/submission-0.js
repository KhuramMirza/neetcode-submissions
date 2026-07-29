class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const myMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];

            if (myMap.has(difference)) {
                return [myMap.get(difference), i];
            } else {
                myMap.set(nums[i], i);
            }
        }
    }
}
