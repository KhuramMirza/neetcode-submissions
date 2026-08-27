class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // 1. Make a frequency counter of characters of s1 string.
        const seen1 = new Map();
        for (let i = 0; i < s1.length; i++) {
            if (seen1.has(s1[i])) {
                seen1.set(s1[i], seen1.get(s1[i]) + 1);
            } else {
                seen1.set(s1[i], 1);
            }
        }

        let left = 0;
        const seen2 = new Map();

        for (let right = 0; right < s2.length; right++) {
            // 1. Set the character into seen2 map
            if (seen2.has(s2[right])) {
                seen2.set(s2[right], seen2.get(s2[right]) + 1);
            } else {
                seen2.set(s2[right], 1);
            }

            // 2. Only run this when window size is bigger to slide the left pointer over
            if (right - left + 1 > s1.length) {
                // Decrease the frequency first
                seen2.set(s2[left], seen2.get(s2[left]) - 1);

                // Delete the char if frequency is zero
                if (seen2.get(s2[left]) === 0) {
                    seen2.delete(s2[left]);
                }
                left++;
            }

            // 3. Now check if the Window is equal to the Seen1 map
            if (right - left + 1 === s1.length) {
                // Return false if they do not have the same number of unique characters
                if (seen1.size === seen2.size) {
                    let match = true;
                    // Compare the values of each key with each other
                    for (let [key, value] of seen1) {
                        // If frequency does not match, set match to false and break
                        if (seen2.get(key) !== value) {
                            match = false;
                            break;
                        }
                    }
                    // Return true if they match entirely
                    if (match) return true;
                }
            }
        }

        // If there was nothing matched return false
        return false;
    }
}
