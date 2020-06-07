// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring (s) {
  let left = 0
  let right = 0
  let anx = 0
  while (right < s.length) {
    const _s = s.slice(left, right)
    if (_s.includes(s[right])) {
      anx = Math.max(anx, right - left)
      left += 1
    } else {
      right += 1
    }
  }
  return Math.max(anx, right - left)
}

console.log(lengthOfLongestSubstring('abcdefg'))
