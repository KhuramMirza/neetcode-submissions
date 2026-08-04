class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyCounter = new Map();
        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        const result = [];

        for (let number of nums) {
            frequencyCounter.set(number, (frequencyCounter.get(number) || 0) + 1);
        }

        for (let [number, frequency] of frequencyCounter) {
            console.log(number, frequency);
            bucket[frequency].push(number);
        }

        for (let i = bucket.length - 1; i > 0; i--) {
            if (bucket[i].length > 0) result.push(...bucket[i]);
            if (result.length === k) return result;
        }
    }
}
