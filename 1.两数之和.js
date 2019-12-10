/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let tempMap = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    const num1 = nums[i]
    const num2 = target - num1
    // 两个数的和，后面的数可以找到前面的数
    if (tempMap[num2] !== undefined) {
      return [tempMap[num2], i]
    }
    tempMap[num1] = i
  }
  return []
};
// @lc code=end

