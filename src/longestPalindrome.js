// https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-zi-chuan-by-leetcode-solution/
function longestPalindrome (s) {
  const n = s.length
  if (n < 2) {
    return s
  }
  const pd = new Array(n).fill(false).map(() => new Array(n).fill(false))
  let anx = ''
  for (let l = 0; l < n; l++) {
    pd[l][l] = true
  }

  for (let r = 1; r < n; r++) {
    for (let l = 0; l < r; l++) {
      if (s[l] !== s[r]) {
        pd[l][r] = false
      } else {
        if (r - l < 3) {
          pd[l][r] = true
        } else {
          pd[l][r] = pd[l + 1][r - 1]
        }
      }
      if (pd[l][r] && r - l + 1 > anx.length) {
        anx = s.slice(l, r + 1)
      }
    }
  }
  return anx
}

console.log(longestPalindrome('ab'))
