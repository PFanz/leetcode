/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = []
  let tempRes = []

  if (s.length === 0) {
    tempRes = []
  } else if (s.length < 2) {
    tempRes = [s[0]]
  }

  for (let i = 1, len = s.length; i < len; i++) {
    const char = s[i]
    let start = i - 1
    let end = i + 1
    tempRes = [char]

    let flag = false
    while (start >= 0 && end <= len) {
      if (!flag) {
        while (s[start] === char) {
          flag = true
          tempRes.push(char)
          start--
        }
        while (s[end] === char) {
          flag = true
          tempRes.push(char)
          end++
        }
        if (start < 0 || end > len) {
          break
        }
      }
      if (s[start] === s[end]) {
        if (!flag) {
          flag = true
          tempRes = [s[start], char, s[end]]
        } else {
          tempRes.unshift(s[start])
          tempRes.push(s[end])
        }
        start--
        end++
      } else {
        result = tempRes.length >= result.length ? tempRes : result
        break
      }
    }
    result = tempRes.length >= result.length ? tempRes : result
  }
  result = tempRes.length >= result.length ? tempRes : result
  return result.join('')
}

// console.log(longestPalindrome('ab'))
