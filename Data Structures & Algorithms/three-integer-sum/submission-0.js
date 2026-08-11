class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b);
        const triplets = [];

        for (let i = 0; i < sorted.length; i++) {
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;
            let left = i + 1;
            let right = sorted.length - 1;
            while (left < right) {
                const sum = sorted[left] + sorted[right];
                const target = -sorted[i];
                if (sum === target) {
                    triplets.push([sorted[left], sorted[right], sorted[i]]);
                    left++;

                    while (sorted[left] === sorted[left - 1] && left < right) {
                        left++;
                    }
                }

                if (sum > target) right--;
                if (sum < target) left++;
            }
        }

        return triplets;
    }
}
