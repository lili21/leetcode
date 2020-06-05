/**
 * 假定数组 M 中每个元素都代表一个模块
 * 其结构为 { id: 1, deps: [ 2, 3 ] }
 * id 即模块的唯一标识，deps 包含该模块所依赖模块的 id
 * 要求对 M 进行排序，结果中任何元素都出现在它的依赖模块之后
 */

//  输入
const modules = [{ id: 4, deps: [1] }, { id: 3, deps: [2] }, { id: 2, deps: [] }, { id: 1, deps: [2, 3] }]

// 输出
// const sortedModules = [{ id: 2, deps: [] }, { id: 3, deps: [2] }, { id: 1, deps: [2, 3] }, { id: 4, deps: [1] }]
function sortModules (modules) {
  if (modules.length === 0) return modules
  const first = modules.find(m => m.deps.length === 0)
  const _modules = modules.filter(m => m.id !== first.id).map(m => {
    m.deps = m.deps.filter(d => d !== first.id)
    return m
  })
  return [first, ...sortModules(_modules)]
}

console.log(sortModules(modules))
