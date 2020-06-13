function minimumTotal (triangle) {
  function minimum (triangle) {
    if (triangle.length <= 1) return triangle
    if (triangle.length === 2) {
      const a = triangle[0]
      const b = triangle[1]
      const res = []
      for (let i = 0; i < a.length; i++) {
        res.push(a[i] + Math.min(b[i], b[i + 1]))
      }
      return res
    } else {
      return minimum([triangle[0], minimum(triangle.slice(1))])
    }
  }
  return minimum(triangle)[0]
}

console.log(minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]))
