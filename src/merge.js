// https://leetcode-cn.com/explore/featured/card/bytedance/243/array-and-sorting/1046/
function merge (intervals) {
  if (intervals.length === 0) return []
  intervals = intervals.sort((a, b) => a[0] - b[0])
  const _merged = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    const j = _merged.length - 1
    if (_merged[j][1] >= intervals[i][1]) {
      continue
    } else if (_merged[j][1] >= intervals[i][0]) {
      _merged[j] = [_merged[j][0], intervals[i][1]]
    } else {
      _merged.push(intervals[i])
    }
  }
  return _merged
}

console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]))
