class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";
        // Make a Frequency Map for all the Characters of t String.
        const tMap = new Map();
        for (let i = 0; i < t.length; i++) {
            tMap.set(t[i], tMap.get(t[i]) + 1 || 1);
        }

        // Prepare the looping of s String
        let left = 0;
        const window = new Map();
        const need = tMap.size;
        let have = 0;
        let res = [-1, -1];
        let resLen = Infinity;

        for (let right = 0; right < s.length; right++) {
            let c = s[right];

            if (tMap.has(c)) {
                window.set(c, window.get(c) + 1 || 1);

                if (window.get(c) === tMap.get(c)) {
                    have += 1;
                }
            }

            while (need === have) {
                if (right - left + 1 < resLen) {
                    resLen = right - left + 1;
                    res = [left, right];
                }

                let leftChar = s[left];

                if (tMap.has(leftChar)) {
                    window.set(leftChar, window.get(leftChar) - 1);

                    if (window.get(leftChar) < tMap.get(leftChar)) {
                        have -= 1;
                    }
                }

                left++;
            }
        }

        return resLen !== Infinity ? s.slice(res[0], res[1] + 1) : "";
    }
}
