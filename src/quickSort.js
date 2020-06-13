function quickSort (arr) {
  if (arr.length <= 1) return arr
  const slow = 0
  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[slow]) {
      left.push(arr[i])
    } else if (arr[i] > arr[slow]) {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), arr[slow], ...quickSort(right)]
}

console.log(quickSort([6, 5, 3, 1, 8, 7, 2, 4]))
