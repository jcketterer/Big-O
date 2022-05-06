function findRotatedIndex(arr, num, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1
  }

  let mid = Math.floor((low + high) / 2)

  if (arr[mid] === num) return mid

  if (arr[low] <= arr[mid]) {
    if (num >= arr[low] && num <= arr[mid]) {
      return findRotatedIndex(arr, num, low, mid - 1)
    }

    return findRotatedIndex(arr, num, mid + 1, high)
  }

  if (num >= arr[mid] && num <= arr[high]) {
    return findRotatedIndex(arr, num, mid + 1, high)
  } else {
    return findRotatedIndex(arr, num, low, mid - 1)
  }
}

module.exports = findRotatedIndex
