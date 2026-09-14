class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        const q = [];
        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            while (q.length > 0 && nums[q[q.length - 1]] < nums[right]) {
                q.pop();
            }

            q.push(right);

            if (q[0] < left) {
                q.shift();
            }

            if (right + 1 >= k) {
                res.push(nums[q[0]]);
                left++;
            }
        }

        return res;
    }
}
