/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map = {}
  for(let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    if (map[num] !== undefined) {
      return true
    }
    map[num] = i
  }
  return false
};
// @lc code=end

