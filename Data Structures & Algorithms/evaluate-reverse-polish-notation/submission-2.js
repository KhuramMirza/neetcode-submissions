class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (let i = 0; i < tokens.length; i++) {
            if (
                !(tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/")
            ) {
                stack.push(tokens[i]);
            } else {
                const num1 = parseInt(stack.pop());
                const num2 = parseInt(stack.pop());
                if (tokens[i] === "+") {
                    stack.push(num2 + num1);
                } else if (tokens[i] === "-") {
                    stack.push(num2 - num1);
                } else if (tokens[i] === "*") {
                    stack.push(num2 * num1);
                } else if (tokens[i] === "/") {
                    stack.push(Math.trunc(num2 / num1));
                }
            }
        }
        return stack.pop();
    }
}
