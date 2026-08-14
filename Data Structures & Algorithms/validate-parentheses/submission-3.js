class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s) {
        const pairs = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
                stack.push(s[i]);
            } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
                if (stack[stack.length - 1] === pairs[s[i]]) {
                    stack.pop();
                } else return false;
            }
        }

        if (stack.length === 0) return true;
        else return false;
    }
}
