// https://leetcode-cn.com/explore/featured/card/bytedance/246/dynamic-programming-or-greedy/1031/

const dp = new Map()
function maxEnvelopes (envelopes) {
  let anx = 0
  for (let i = 0; i < envelopes.length; i++) {
    const r = 1 + getEnvelopes(envelopes, envelopes[i])
    console.log(i, r)
    anx = Math.max(anx, r)
  }

  return anx
};

function getEnvelopes (envelopes, e) {
  if (dp.has(e)) {
    return dp.get(e)
  }
  const biggerEnvelopes = envelopes.filter(_e => _e[0] > e[0] && _e[1] > e[1])
  if (biggerEnvelopes.length === 0) return 0
  let anx = 0
  for (let i = 0; i < biggerEnvelopes.length; i++) {
    anx = Math.max(anx, 1 + getEnvelopes(envelopes, biggerEnvelopes[i]))
  }

  dp.set(e, anx)
  return anx
}

console.log(maxEnvelopes([[2, 100], [3, 200], [4, 300], [5, 500], [5, 400], [5, 250], [6, 370], [6, 360], [7, 380]]))
