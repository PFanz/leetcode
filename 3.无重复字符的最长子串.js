/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0
  let start = 0
  let end = 0
  let len = s.length
  let map = {}
  // 遍历字符串
  for (; end < len; end++) {
    const char = s[end]
    // 该字符已经存在
    if (map[char] !== undefined) {
      // 先前面的长度
      max = Math.max(max, end - start)
      // 先修改start位置，再计算长度
      start = Math.max(map[char] + 1, start)
      max = Math.max(max, end - start + 1)
    }
    map[char] = end
  }
  // end为len，比最后位置多1
  max = Math.max(max, end - start)
  return max
}

// 下面是目前最快的方式
var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0
  }
  let left = 0
  let right = 1
  let result = 0
  const len = s.length
  // 没有使用map，使用indexOf检测下一个元素是否在
  while (right < len) {
    const text = s.substr(left, right - left)
    const index = text.indexOf(s[right])
    if (index >= 0) {
      if (result < right - left) {
        result = right - left
      }
      left = left + index + 1
    }
    ++right
  }
  if (result < right - left) {
    result = right - left
  }
  return result
}
