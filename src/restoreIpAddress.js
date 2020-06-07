// https://leetcode-cn.com/explore/featured/card/bytedance/242/string/1044/
function restoreIpAddresses (s) {
  const res = []

  function restore (s, arr, max) {
    const l = s.length
    if (l > max) return
    if (max === 0) {
      res.push(arr.join('.'))
    }

    for (let i = 1; i < 4; i++) {
      const v = s.slice(0, i)
      if (v > 255) return
      if (v.length > 1 && /^0/.test(v)) return
      if (i > l) return
      restore(s.slice(i), arr.concat(v), max - 3)
    }
  }
  restore(s, [], 12)

  return res
}

console.log(restoreIpAddresses('25525511135'))
