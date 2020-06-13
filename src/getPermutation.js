// 字符串全排列
import { copy } from './utils.js'
function getPermutation (n, k) {
  let s = ''
  while (n) {
    s = n + s
    n = n - 1
  }
  function getFullPermutation (s) {
    if (s.length === 1) {
      return [s[0]]
    }
    let res = []
    for (let i = 0; i < s.length; i++) {
      const h = s[i]
      const l = s.slice(0, i) + s.slice(i + 1)
      const subProb = getFullPermutation(l)
      res = [...res, ...subProb.map(s => h + s)]
      if (res.length >= k) break
    }
    return res
  }
  const r = getFullPermutation(s)
  return r[k - 1]
}
function getFullPermutation (s) {
  if (s.length === 1) {
    return [s[0]]
  }
  let res = []
  for (let i = 0; i < s.length; i++) {
    const h = s[i]
    const l = s.slice(0, i) + s.slice(i + 1)
    const subProb = getFullPermutation(l)
    res = [...res, ...subProb.map(s => h + s)]
    console.log(copy(res))

    // if (res.length >= 9) break
  }
  return res
}

console.log(getFullPermutation('123'))
// console.log(c)
console.log(getPermutation(3, 3))
