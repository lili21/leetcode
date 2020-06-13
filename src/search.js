// https://leetcode-cn.com/explore/featured/card/bytedance/243/array-and-sorting/1017/
function search (nums, target) {
  if (target >= nums[0]) {
    for (let i = 0, l = nums.length; i < l; i++) {
      const v = nums[i]
      if (target === v) {
        return i
      }
      if (target < v) {
        return -1
      }
      if (nums[i + 1] < v) {
        return -1
      }
    }
  } else {
    for (let i = nums.length - 1; i > 0; i--) {
      const v = nums[i]
      if (target === v) {
        return i
      }
      if (target > v) {
        return -1
      }
      if (v < nums[i - 1]) {
        return -1
      }
    }
  }
  return -1
}

console.log(search([1], 0))
