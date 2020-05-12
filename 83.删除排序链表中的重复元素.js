/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let result = head
  if (!head) {
    return result
  }
  let pre = head
  while (head.next) {
    head = head.next
    if (pre.val === head.val) {
      pre.next = head.next
    } else {
      pre = head
    }
  }
  return result
};
// @lc code=end

