// https://leetcode-cn.com/explore/featured/card/bytedance/242/string/1015/
function multiply (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  const l1 = num1.length
  const l2 = num2.length
  const res = new Array(l1 + l2).fill(0)
  for (let i = l1 - 1; i >= 0; i--) {
    for (let j = l2 - 1; j >= 0; j--) {
      const r = num1[i] * num2[j]
      const sum = r + res[i + j + 1]
      res[i + j] += Math.floor(sum / 10)
      res[i + j + 1] = sum % 10
    }
  }
  let i = 0
  while (res[i] === 0) {
    i += 1
  }
  return res.slice(i).join('')
}

console.log(multiply('0', '1'))
