
var maxAreaOfIsland = function (grid) {
  let res = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      res = Math.max(res, getArea(grid, i, j))
    }
  }
  return res
}

function getArea (grid, i, j) {
  if (i < 0 || i > grid.length - 1) return 0
  if (j < 0 || j > grid[i].length - 1) return 0
  if (grid[i][j] === 0) return 0
  grid[i][j] = 0
  return 1 + getArea(grid, i - 1, j) + getArea(grid, i, j + 1) + getArea(grid, i + 1, j) + getArea(grid, i, j - 1)
}

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]

const r = maxAreaOfIsland(grid)

console.log(r)
