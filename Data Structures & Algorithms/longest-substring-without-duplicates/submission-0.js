class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Map();
        let left = 0;
        let tempLength = 0;

        for (let i = 0; i < s.length; i++) {
            if (seen.has(s[i])) {
                left = Math.max(seen.get(s[i]) + 1, left);
                seen.delete(s[i]);
            }
            seen.set(s[i], i);
            tempLength = Math.max(tempLength, i - left + 1);
        }

        return tempLength;
    }
}
