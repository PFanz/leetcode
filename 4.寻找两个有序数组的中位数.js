/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const middle = (nums1.length + nums2.length) / 2
  // 中位数前面元素个数
  let len = Math.ceil(middle - 1)
  const resultPos = len

  let result1 = 0
  let result2 = 0

  let arr = []

  if (nums1.length === 0) {
    arr = nums2
  } else if (nums2.length === 0) {
    arr = nums1
  } else {
    let pos1 = 0
    let pos2 = 0
    while (len + 2 > 0) {
      if (nums1[pos1] === undefined) {
        arr.push(nums2[pos2])
        pos2++
      } else if (nums2[pos2] === undefined) {
        arr.push(nums1[pos1])
        pos1++
      } else if (nums1[pos1] > nums2[pos2]) {
        arr.push(nums2[pos2])
        pos2++
      } else {
        arr.push(nums1[pos1])
        pos1++
      }
      len--
    }
  }

  if (middle % 1 !== 0) {
    result2 = result1 = arr[resultPos]
  } else {
    result1 = arr[resultPos]
    result2 = arr[resultPos + 1]
  }

  return (result1 + result2) / 2
}
