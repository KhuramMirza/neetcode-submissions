class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0;
        let left = 0;
        let right = height.length - 1;
        let maxLeft = height[left];
        let maxRight = height[right];

        while (left < right) {
            maxLeft = Math.max(height[left], maxLeft);
            maxRight = Math.max(height[right], maxRight);
            if (maxLeft < maxRight) {
                totalWater = maxLeft - height[left] + totalWater;
                left++;
            } else {
                totalWater = maxRight - height[right] + totalWater;
                right--;
            }
        }
        return totalWater;
    }
}
