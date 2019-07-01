/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 保存起始，也就是真正的结果
  let start = null
  let result = {}
  // 进位
  let carry = 0
  while (l1 !== null || l2 !== null) {
    let val1 = 0
    let val2 = 0
    if (l1 !== null) {
      val1 = l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      val2 = l2.val
      l2 = l2.next
    }
    let val = val1 + val2 + carry
    // 重置进位
    if (val >= 10) {
      val -= 10
      carry = 1
    } else {
      carry = 0
    }
    result.next = {
      val
    }
    result = result.next
    if (start === null) {
      start = result
    }
  }
  // 最高位依然有进位的情况
  if (carry) {
    result.next = {
      next: null,
      val: carry
    }
  }
  return start
}

// 下面是目前最快的方式
var addTwoNumbers = function (l1, l2) {
  // 使用ListNode对象
  let data = new ListNode(0)
  let l = data
  let sum
  let pre = 0
  do {
    // 使用&&替代if
    sum = +(l1 && l1.val) + +(l2 && l2.val) + pre
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
    if (sum >= 10) {
      pre = 1
      sum = sum - 10
    } else {
      pre = 0
    }
    l = l.next = new ListNode(sum)
  } while (l1 || l2)
  if (pre) {
    l.next = new ListNode(pre)
  }
  return data.next
}
