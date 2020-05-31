// https://leetcode-cn.com/problems/maximum-performance-of-a-team/
function maxPerformance (n, speed, efficiency, k) {
  const dp = [0]
  function getPeople (speed, efficiency, k) {
    if (k === 0) return []
    const peoples = getPeople(speed, efficiency, k - 1)
    let res = 0
    let index = 0
    for (let i = 0; i < speed.length; i++) {
      if (peoples.indexOf(i) >= 0) continue
      const performance = getPerformance(speed, efficiency, [...peoples, i])
      if (performance > res) {
        res = performance
        index = i
      }
    }
    const r = [...peoples, index]
    dp[k] = res % (Math.pow(10, 9) + 7)
    return r
  }
  getPeople(speed, efficiency, k)

  return Math.max(...dp)
}

function getPerformance (speed, efficiency, peoples) {
  const s = peoples.map(p => speed[p]).reduce((r, s) => r + s, 0)
  const e = Math.min(...peoples.map(p => efficiency[p]))
  return s * e
}

console.log(maxPerformance(3, [2, 8, 2], [2, 7, 1], 2))
