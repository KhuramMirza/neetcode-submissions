class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const seenSet = new Set(nums);
        let starterNums = [];
        let maxSeq = 1;
        let index = 0;
        let accumulator = 1;

        for (const num of seenSet) {
            if (!seenSet.has(num - 1)) starterNums.push(num);
        }

        while (index < starterNums.length) {
            if (seenSet.has(starterNums[index] + accumulator)) {
                accumulator += 1;
            } else {
                maxSeq = Math.max(maxSeq, accumulator);
                accumulator = 1;
                index += 1;
            }
        }

        return maxSeq;
    }
}
