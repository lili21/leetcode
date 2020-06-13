// https://leetcode-cn.com/explore/featured/card/bytedance/246/dynamic-programming-or-greedy/1028/
function maximalSquare (matrix) {
  let maxSide = 0
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return maxSide
  const res = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0))
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        if (i === 0 || j === 0) {
          res[i][j] = 1
        } else {
          res[i][j] = Math.min(res[i][j - 1], res[i - 1][j], res[i - 1][j - 1]) + 1
        }
        maxSide = Math.max(maxSide, res[i][j])
      }
    }
  }
  return maxSide * maxSide
}

console.log(maximalSquare([
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0]
]))
