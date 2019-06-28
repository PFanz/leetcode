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

// 下面是目前最快的方式
var twoSum = function (nums, target) {
  let obj = {}
  for (var i = 0; i < nums.length; i++) {
    // 遍历的同时，寻找是否有解，如果有就直接返回；没有的话，继续寻找下个，因为对map是已经保存有前面的信息的
    if (obj[target - nums[i]] !== undefined) {
      return [obj[target - nums[i]], i]
    }
    obj[nums[i]] = i
  }
}
