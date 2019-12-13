/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

const pair = {
  '(': ')',
  '{': '}',
  '[': ']'
}

var isValid = function(s) {
  let stack = []
  for (let i = 0, len = s.length; i < len; i ++) {
    const char = s[i]
    if (['(', '{', '['].includes(char)) {
      stack.push(char)
    } else if (stack.length === 0) {
      return false
    } else {
      const temp = stack.pop()
      if (pair[temp] !== char) {
        return false
      }
    }
  }
  return !stack.length
};
// @lc code=end

