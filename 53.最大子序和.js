/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//  感觉写得还是有些混乱，不够优雅
// 结果使用内存过多
// var maxSubArray = function(nums) {
//   let result = nums[0]
//   // 正，负，正，负
//   let arr = []
//   while (nums[0] < 0) {
//     result = Math.max(nums.shift(), result)
//   }
//   while (nums.length) {
//     // 整数和
//     let positive = 0
//     // 负数和
//     let negative = 0
//     while (nums[0] >= 0) {
//       positive += nums.shift()
//     }
//     while (nums[0] < 0) {
//       negative += nums.shift()
//     }
//     arr.push(positive)
//     arr.push(negative)
//   }
//   // 通过arr计算result
//   if (arr.length) {
//     result = arr[0]
//     let sum = 0
//     for (let i = 0, len = arr.length; i < len; i++) {
//       const num = arr[i]
//       if (num < 0) {
//         result = Math.max(result, sum)
//       }
//       sum += num
//       if (sum < 0) {
//         sum = 0
//       }
//     }
//     result = Math.max(result, sum)
//   }
//   return result
// };

var maxSubArray = function(nums) {
  let result = nums[0]
  let sum = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    if (sum <= 0) {
      sum = num
    } else {
      sum += num
    }
    result = Math.max(result, sum)
  }
  
  return result
};
// @lc code=end

