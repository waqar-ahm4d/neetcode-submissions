class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  //   second version
  maxProfit(prices) {
    const n = prices.length;

    if (n === 0) return 0;

    const maxRight = new Array(n);
    maxRight[n - 1] = prices[n - 1];

    for (let i = n - 2; i >= 0; i--) {
      maxRight[i] = Math.max(prices[i], maxRight[i + 1]);
    }

    let maxProfit = 0;
    for (let i = 0; i < n; i++) {
      maxProfit = Math.max(maxProfit, maxRight[i] - prices[i]);
    }
    return maxProfit;
  }
}
