// https://leetcode-cn.com/problems/maximum-performance-of-a-team/
function maxPerformance (n, speed, efficiency, k) {
  const _se = []
  for (let i = 0; i < n; i++) {
    _se[i] = { s: speed[i], e: efficiency[i] }
  }
  // 按照效率值降序排列
  const se = _se.sort((a, b) => b.e - a.e)
  console.log(se)
  let anx = 0
  let sum = 0
  const speedArray = []
  for (let i = 0; i < n; i++) {
    const { s, e } = se[i]
    const _sum = sum + s
    anx = Math.max(anx, e * _sum)
    speedArray.push(s)
    sum += s
    if (speedArray.length === k) {
      const m = Math.min(...speedArray)
      const i = speedArray.indexOf(m)
      speedArray.splice(i, 1)
      sum -= m
    }
  }
  return anx % (Math.pow(10, 9) + 7)
}

console.log(maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 4))
