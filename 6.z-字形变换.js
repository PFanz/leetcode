/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length < numRows || numRows <= 1) {
    return s
  }

  let result = ''
  let arr = [[]]
  let rows = 0
  let cols = 0

  for (let i = 0, len = s.length; i < len;) {
    if (rows === 0) {
      while (rows < numRows && i < len) {
        if (arr[rows] === undefined) {
          arr[rows] = []
        }
        // console.log(rows, cols, s[i])
        arr[rows][cols] = s[i]
        rows++
        i++
      }
      rows--
    } else if (rows === numRows - 1) {
      cols++
      rows--
      while (rows > 0 && i < len) {
        // console.log(rows, cols, s[i])
        arr[rows][cols] = s[i]
        cols++
        rows--
        i++
      }
    }
  }

  // console.log(arr)

  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0, jlen = arr[i].length; j < jlen; j++) {
      if (arr[i][j] !== undefined) {
        result += arr[i][j]
      }
    }
  }

  return result
}

// console.log(convert('PAYPALISHIRING', 3))
