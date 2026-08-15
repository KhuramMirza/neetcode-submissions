class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) this.stack.push({ val: val, min: val });
        else {
            const prevMin = this.stack[this.stack.length - 1].min;
            const currMin = Math.min(prevMin, val);
            this.stack.push({ val: val, min: currMin });
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}
