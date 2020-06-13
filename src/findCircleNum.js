// https://leetcode-cn.com/explore/featured/card/bytedance/243/array-and-sorting/1036/
function findCircleNum (grid) {
  let res = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      res += getCircle(grid, i, j)
    }
  }
  return res
}

function getCircle (grid, i, j) {
  if (i < 0 || i > grid.length - 1) return 0
  if (j < 0 || j > grid.length - 1) return 0
  if (grid[i][j] === 0) return 0
  grid[i][j] = 0
  getCircle(grid, i - 1, j)
  getCircle(grid, i, j + 1)
  getCircle(grid, i + 1, j)
  getCircle(grid, i, j - 1)
  return 1
}
const m = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1]
]

console.log(findCircleNum(m))
