// https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/?utm_source=LCUS&utm_medium=ip_redirect_q_uns&utm_campaign=transfer2china
/**
 * 递归版本
 */

// var findLengthOfLCIS = function (nums) {
//   if (!nums.length) return 0
//   let res = 1
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i + 1] > nums[i]) {
//       res += 1
//     } else {
//       // 递归会导致爆栈
//       return Math.max(res, findLengthOfLCIS(nums.slice(i + 1)))
//     }
//   }
//   return res
// }

/**
 * 循环版本
 */

var findLengthOfLCIS = function (nums) {
  if (!nums.length) return 0
  let res = 1
  let l = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      l += 1
    } else {
      res = Math.max(res, l)
      l = 1
    }
  }
  return Math.max(res, l)
}

/**
 * 尾递归优化版
 */

// var findLengthOfLCIS = function (nums, res = 1) {
//   if (!nums.length) return 0
//   let l = 1
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i + 1] > nums[i]) {
//       l += 1
//     } else {
//       return findLengthOfLCIS(nums.slice(i + 1), Math.max(res, l)) // 尾递归优化
//     }
//   }
//   return Math.max(res, l)
// }

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))
