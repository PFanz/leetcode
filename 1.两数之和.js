/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let num1 = 0
  let num2 = 0
  const len = nums.length
  // 通过以空间换时间的方式，提升效率
  let map = {}
  for (let i = 0; i < len; i++) {
    const key = nums[i]
    if (map[key]) {
      map[key].push(i)
    } else {
      map[key] = [i]
    }
  }
  for (let i = 0; i < len; i++) {
    num1 = nums[i]
    num2 = target - num1
    if (num1 !== num2 && map[num2]) {
      return [map[num1][0], map[num2][0]]
    } else if (num1 === num2 && map[num1].length === 2) {
      return [map[num1][0], map[num1][1]]
    }
  }
  return []
}
