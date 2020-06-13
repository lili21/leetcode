// 头条面试题
function sum (...args) {
  function next (...args) {
    next.value = args.reduce((r, i) => r + i, next.value)
    return next
  }
  next.value = args.reduce((r, i) => r + i, 0)
  return next
}

const r = sum(1, 2, 3)

console.log(r(4)(1, 3)(3))
