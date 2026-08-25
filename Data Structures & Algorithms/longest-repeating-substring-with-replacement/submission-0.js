class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const frequencyCounter = new Map();
        let maxFrequency = 0;
        let left = 0;
        let maxLength = 0;

        for (let i = 0; i < s.length; i++) {
            if (frequencyCounter.has(s[i])) {
                frequencyCounter.set(s[i], frequencyCounter.get(s[i]) + 1);
                maxFrequency = Math.max(maxFrequency, frequencyCounter.get(s[i]));
            } else {
                frequencyCounter.set(s[i], 1);
                maxFrequency = Math.max(maxFrequency, frequencyCounter.get(s[i]));
            }
            while (i - left + 1 - maxFrequency > k) {
                frequencyCounter.set(s[left], frequencyCounter.get(s[left]) - 1);
                left++;
            }
            maxLength = Math.max(maxLength, i - left + 1);
        }

        return maxLength;
    }
}
