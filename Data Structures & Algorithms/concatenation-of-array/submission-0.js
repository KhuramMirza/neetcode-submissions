class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const arr = Array.from({ length: 2 * nums.length }, () => 0);

        for (let i = 0; i < nums.length; i++) {
            arr[i] = nums[i];
            arr[i + nums.length] = nums[i];
        }

        console.log(arr);
        return arr;
    }
}
