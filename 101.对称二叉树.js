/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
      return true
    }

    return isSymmetric(root.left, root.right)

    function isSymmetric (left, right) {
      if (left === right) {
        return true
      }
      if (left && !right) {
        return false
      }
      if (!left && right) {
        return false
      }
      if (left.val !== right.val) {
        return false
      }
      if (left.left || left.right || right.left || right.right) {
        return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left)
      } else {
        return true
      }
    }
};
// @lc code=end

