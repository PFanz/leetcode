/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// temp1存当前数左边所有数的乘积
// temp2存当前数右边所有数的乘积
// temp1 * temp2就能得到结果
// 如果分别去计算，n循环里至少还需要个循环来做乘积，所以需要想办法将计算乘积的循环和对每个位置的循环结合在一起
// 偏技巧
var productExceptSelf = function(nums) {
  let temp1 = [1]
  let temp2 = [1]
  let result = []
  const len = nums.length
  let product = 1
  for (let i = 0; i < len - 1; i++) {
    const num = nums[i]
    product *= num
    temp1.push(product)
  }
  product = 1
  for (let i = len - 1; i > 0; i--) {
    const num = nums[i]
    product *= num
    temp2.unshift(product)
  }

  for (let i = 0; i < len; i++) {
    result.push(temp1[i] * temp2[i])
  }
  return result
};
// @lc code=end

