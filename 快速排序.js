// 快速排序
function fast_sort (arr) {
  if (arr.length < 2) {
    return arr
  }

  const div = arr[0]
  let pre = []
  let behind = []
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] < div) {
      pre.push(arr[i])
    } else {
      behind.push(arr[i])
    }
  }

  return fast_sort(pre).concat(div).concat(fast_sort(behind))
}
