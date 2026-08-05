class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for (let i = 0; i < strs.length; i++) {
            encodedString += `${strs[i].length}#${strs[i]}`;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let numberIndex = 0;
        const results = [];

        while (i < str.length) {
            if (str[i] === "#") {
                const length = Number.parseInt(str.slice(numberIndex, i), 10);
                const word = str.slice(i + 1, i + 1 + length);
                results.push(word);
                i = i + 1 + length;
                numberIndex = i;
            } else {
                i++;
            }
        }

        return results;
    }
}
