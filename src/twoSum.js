// 两数之和
const map = new Map()
function twoSum (nums) {
  const res = []
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      res.push([nums[i], map.get(nums[i])])
    } else {
      map.set(-nums[i], nums[i])
    }
  }
  return res
}

console.log(twoSum([-1, 0, 1, 2, -1, -2]))
