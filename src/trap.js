// https://leetcode-cn.com/explore/featured/card/bytedance/243/array-and-sorting/1047/

function trap (height) {
  const l = height.length
  let res = 0
  const leftMax = []
  leftMax[0] = height[0]
  const rightMax = []
  rightMax[l - 1] = height[l - 1]
  for (let i = 1; i < l - 1; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1])
  }

  for (let j = l - 2; j > 0; j--) {
    rightMax[j] = Math.max(height[j], rightMax[j + 1])
  }

  for (let i = 1; i < l - 1; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  console.log(leftMax, rightMax)

  return res
}

console.log(trap([4, 2]))
