// https://leetcode-cn.com/explore/featured/card/bytedance/243/array-and-sorting/1020/
function threeSum (nums) {
  const map = new Map()
  const res = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (map.has(nums[j])) {
        const m = map.get(nums[j])
        if (res.some(r => {
          return m.every(i => r.indexOf(i) >= 0)
        })) {
          continue
        }
        res.push([...m, nums[j]])
        map.delete(nums[j])
      } else {
        map.set(0 - nums[j] - nums[i], [nums[i], nums[j]])
      }
    }
  }
  return res
}

console.log(threeSum([-1, 2, -2, 1]))
