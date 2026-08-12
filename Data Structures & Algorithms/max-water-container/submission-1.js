class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxA = 0;
        while (left < right) {
            const tempH = Math.min(heights[left], heights[right]);
            const tempW = Math.abs(right - left);
            const tempA = tempH * tempW;

            maxA = Math.max(tempA, maxA);

            if (heights[left] > heights[right]) {
                right--;
            } else if (heights[left] < heights[right]) {
                left++;
            } else {
                left++;
                right--;
            }
        }

        return maxA;
    }
}
