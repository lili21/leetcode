// https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-zi-chuan-by-leetcode-solution/
var longestPalindrome = function (s) {
  let res = s[0] || ''
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    const indexs = findAllIndex(s, c)
    for (let j = 0; j < indexs.length; j++) {
      const substring = s.slice(i, indexs[j] + 1)
      if (isPalindrome(substring)) {
        res = substring.length > res.length ? substring : res
      }
    }
  }
  return res
}

function findAllIndex (s, v) {
  const indexs = []
  let i = s.indexOf(v)
  while (i !== -1) {
    indexs.push(i)
    i = s.indexOf(v, i + 1)
  }
  return indexs
}

function isPalindrome (s) {
  return s === s.split('').reverse().join('')
}

console.log(longestPalindrome('bababcd'))
