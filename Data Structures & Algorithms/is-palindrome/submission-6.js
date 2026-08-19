class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlnum = (c) => (c >= "0" && c <= "9") || (c >= "a" && c <= "z");

        let left = 0;
        let right = s.length - 1;

        while (left <= right) {
            const l = s[left].toLowerCase();
            const r = s[right].toLowerCase();

            if (!isAlnum(l)) {
                left++;
                continue;
            }

            if (!isAlnum(r)) {
                right--;
                continue;
            }

            if (l !== r) return false;
            else {
                left++;
                right--;
            }
        }
        return true;
    }
}
