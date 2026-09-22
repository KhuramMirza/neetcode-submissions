class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let res = nums[0];

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else if (nums[mid] <= nums[right]) {
                res = Math.min(res, nums[mid]);
                right = mid - 1;
            }
        }
        return res;
    }
}
