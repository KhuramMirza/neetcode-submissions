class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = []; // This works like a Waiting Room
        const output = new Array(temperatures.length).fill(0); // Out actuall output array
        for (let i = 0; i < temperatures.length; i++) {
            while (result.length > 0 && result[result.length - 1].val < temperatures[i]) {
                const poppedItem = result.pop();
                const poppedIndex = poppedItem.index;
                output[poppedIndex] = i - poppedIndex;
            }
            result.push({ val: temperatures[i], index: i });
        }

        return output;
    }
}
