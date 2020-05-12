/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) {
    return x
  }
  for(let i = 1; i <= x; i++) {
    const sqrt = i * i
    if (sqrt < x) {
    } else if (sqrt > x) {
      return i - 1
    } else {
      return i
    }
  }
};
// @lc code=end

