// https://leetcode-cn.com/explore/featured/card/bytedance/244/linked-list-and-tree/1026/

import { TreeNode } from './utils.js'

const root = new TreeNode(3)
root.left = new TreeNode(5)
root.right = new TreeNode(1)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(2)
root.left.right.left = new TreeNode(7)
root.left.right.right = new TreeNode(4)
root.right.left = new TreeNode(0)
root.right.right = new TreeNode(8)

function lowestCommonAncestor (root, p, q) {
  // if (contain(root.left, p, q)) {
  //   return lowestCommonAncestor(root.left, p, q)
  // } else if (contain(root.right, p, q)) {
  //   return lowestCommonAncestor(root.right, p, q)
  // } else {
  //   return root
  // }
  if (root === null) return null
  if (root.val === p || root.val === q) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) {
    return root
  } else {
    return left || right
  }
}

function contain (root, p, q) {
  return hasNode(root, p) && hasNode(root, q)
}

const map = new Map()

function hasNode (root, val) {
  if (root === null) return false

  if (map.has(root.val)) {
    return map.get(root.val)
  }

  let r = false

  if (root.val === val) {
    r = true
  } else {
    r = hasNode(root.left, val) || hasNode(root.right, val)
  }
  map.set(root.val, r)
  return r
}

console.log(lowestCommonAncestor(root, 5, 1).val)
