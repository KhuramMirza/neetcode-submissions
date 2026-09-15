class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const stack = [];

        for (let i = 0; i < heights.length; i++) {
            let start = i;
            let currentHeight = heights[i];

            while (stack.length > 0 && stack[stack.length - 1].height > currentHeight) {
                let popped = stack.pop();
                let width = i - popped.start;
                let area = popped.height * width;

                maxArea = Math.max(maxArea, area);
                start = popped.start;
            }

            stack.push({ start: start, height: currentHeight });
        }

        for (let i = 0; i < stack.length; i++) {
            let popped = stack[i];
            let width = heights.length - popped.start;
            let area = popped.height * width;
            maxArea = Math.max(maxArea, area);
        }

        return maxArea;
    }
}
