class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (!prices || prices.length === 0) return 0;

        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else {
                const currentProfit = prices[i] - minPrice;
                if (maxProfit < currentProfit) {
                    maxProfit = currentProfit;
                }
            }
        }

        return maxProfit;
    }
}
