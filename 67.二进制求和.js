/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aIdx = a.length - 1
  let bIdx = b.length - 1
  let result = ''
  let carry = false
  while (aIdx >= 0 || bIdx >= 0) {
    let aNum = aIdx >= 0 ? +a[aIdx] : 0
    let bNum = bIdx >= 0 ? +b[bIdx] : 0
    let sum = aNum + bNum
    if (carry) {
      sum++
    }

    if (sum < 2) {
      carry = false
      result = '' + sum + result
    } else if (sum === 2) {
      carry = true
      result = '' + 0 + result
    } else if (sum === 3) {
      carry = true
      result = '' + 1 + result
    }

    aIdx--
    bIdx--
  }
  
  if (carry) {
    result = '' + 1 + result
  }
  return result
};
// @lc code=end

