/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let endIndex = m + n - 1
  let index1 = m - 1
  let index2 = n - 1
  while (index2 >= 0) {
    if (index1 < 0) {
      nums1[endIndex] = nums2[index2]
      endIndex--
      index2--
    } else if (nums1[index1] >= nums2[index2]) {
      nums1[endIndex] = nums1[index1]
      endIndex--
      index1--
    } else {
      nums1[endIndex] = nums2[index2]
      endIndex--
      index2--
    }
  }
  return nums1
};
// @lc code=end

