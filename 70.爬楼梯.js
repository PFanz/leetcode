/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

let map = {
  1: 1,
  2: 2
}

var climbStairs = function(n) {
  let result = map[n] || climbStairs(n - 1) + climbStairs( n - 2)

  map[n] = result

  return result
};
// @lc code=end

