// 头条面试题

const _asyncAdd = (a, b) => {
  // return Promise.resolve(a + b)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b)
    }, 1000)
  })
}
async function sum (...args) {
  if (args.length === 0) return 0
  if (args.length === 1) return args[0]
  if (args.length === 2) return _asyncAdd(...args)
  const mid = Math.floor(args.length / 2)
  const [s1, s2] = await Promise.all([
    sum(...args.slice(0, mid)),
    sum(...args.slice(mid))
  ])
  return sum(s1, s2)
}

// sum(1, 2, 3, 4, 5).then(r => console.log(r))

setTimeout(() => {
  console.log('ttt')
}, 2000)
