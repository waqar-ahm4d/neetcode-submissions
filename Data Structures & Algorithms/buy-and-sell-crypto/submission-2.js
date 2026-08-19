class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  // optimal verssion
  maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else {
        let currentProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, currentProfit);
      }
    }

    return maxProfit;
  }
}
