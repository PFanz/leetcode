/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p === q) {
    return true
  }
  if (!p && q) {
    return false
  }
  if (p && !q) {
    return false
  }
  if (p.val !== q.val) {
    return false
  }
  if (p.left || q.left || p.right || q.right) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  } else {
    return true
  }
};
// @lc code=end

