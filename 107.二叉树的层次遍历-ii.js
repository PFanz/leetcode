/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let result = []

  if (!root) {
    return result
  }

  runLayer([root], [])

  function runLayer(nodes, layer) {
    if (!nodes.length) {
      return
    }
    let nextLayerNodes = nodes.reduce((nodes, node) => {
      layer.push(node.val)
      if (node.left) {
        nodes = nodes.concat(node.left)
      }
      if (node.right) {
        nodes = nodes.concat(node.right)
      }
      return nodes
    }, [])
    runLayer(nextLayerNodes, [])
    result.push(layer)
  }

  return result
};
// @lc code=end

