class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        console.log(cleanString);
        const reversedString = [];

        for (let i = cleanString.length - 1; i >= 0; i--) {
            reversedString.push(cleanString[i]);
        }
        console.log(reversedString.join(""));
        return cleanString === reversedString.join("");
    }
}
