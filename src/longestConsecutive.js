// https://leetcode-cn.com/explore/featured/card/bytedance/243/array-and-sorting/1019/
// 排序
// var longestConsecutive = function (nums) {
//   const arr = nums.sort((a, b) => a - b)
//   let anx = 1
//   let l = 1
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1] + 1) {
//       l += 1
//     } else {
//       anx = Math.max(anx, l)
//       l = 1
//     }
//   }
//   return Math.max(anx, l)
// }

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

// hash

function longestConsecutive (nums) {
  if (!nums.length) return 0
  const hash = new Map()
  for (const n of nums) {
    hash.set(n, true)
  }

  let anx = 1
  for (const n of hash.keys()) {
    if (hash.get(n - 1)) continue
    let l = 1
    let currentNum = n

    while (hash.get(currentNum + 1)) {
      l += 1
      currentNum += 1
    }
    anx = Math.max(anx, l)
  }
  return anx
}
