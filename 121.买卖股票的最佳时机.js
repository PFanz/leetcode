/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0
  let min = prices[0]
  const len = prices.length
  if (len < 2) {
    return 0
  }
  for (let i = 1; i < len; i++) {
    const price = prices[i]
    if (price < min) {
      min = price
    } else {
      result = Math.max(result, price - min)
    }
  }
  return result
};
// @lc code=end

