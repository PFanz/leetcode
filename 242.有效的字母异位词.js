/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  let temp = {}
  for (let i = 0, len = s.length; i < len; i++) {
    const char = s[i]
    const count = temp[char]
    if (count) {
      temp[char] = count + 1
    } else {
      temp[char] = 1
    }
  }
  for (let i = 0, len = t.length; i < len; i++) {
    const char = t[i]
    const count = temp[char]
    if (count > 1) {
      temp[char] = count - 1
    } else if (count === 1) {
      delete temp[char]
    } else {
      return false
    }
  }
  for (key in temp) {
    return false
  }
  return true
};
// @lc code=end

