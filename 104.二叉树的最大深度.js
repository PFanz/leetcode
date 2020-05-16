/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  let result = 0
  
  getDeep(root, 0)

  function getDeep (node, deep) {
    if (node) {
      result = Math.max(result, deep + 1)
      if (node.left) {
        getDeep(node.left, deep + 1)
      }
      if (node.right) {
        getDeep(node.right, deep + 1)
      }
    }
  }
  return result
};
// @lc code=end

