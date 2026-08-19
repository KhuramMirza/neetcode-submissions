class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        console.log(cleanString);

        let left = 0;
        let right = cleanString.length - 1;

        while (left <= right) {
            if (cleanString[left] !== cleanString[right]) return false;
            else {
                left++;
                right--;
            }
        }
        return true;
    }
}
