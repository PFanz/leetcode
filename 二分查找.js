// 二分查找
function binary_search (arr, item) {
  let start = 0
  let end = arr.length - 1

  while (end >= start) {
    const mid = Math.floor((start + end) / 2)

    if (arr[mid] === item) {
      return mid
    }

    if (arr[mid] > item) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  return -1
}
