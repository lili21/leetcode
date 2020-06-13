// https://leetcode-cn.com/explore/featured/card/bytedance/246/dynamic-programming-or-greedy/1029/
function maxSubArray (nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      res = Math.max(res, sum(nums.slice(i, j)))
    }
  }
  return res
}
function sum (arr) {
  return arr.reduce((r, i) => r + i, 0)
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
