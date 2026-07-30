class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const newMap = new Map();

        for (let i = 0; i < strs.length; i++) {
            const word = strs[i];
            const sortedKey = word.split("").sort().join("");
            if (!newMap.has(sortedKey)) {
                newMap.set(sortedKey, [word]);
            } else {
                newMap.set(sortedKey, [...newMap.get(sortedKey), word]);
            }
        }
        return [...newMap.values()];
    }
}
