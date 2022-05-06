function findRotationCount(arr, low = 0, high = arr.length - 1) {
  while (low <= high) {
    let mid = Math.floor((high + low) / 2)
    let prev = (mid - 1 + high) % arr.length
    let next = (mid + 1) % arr.length

    if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
      return mid
    } else if (arr[mid] <= arr[high]) {
      high = mid - 1
    } else if (arr[mid] >= arr[low]) {
      low = mid + 1
    }
  }
  return 0
}

module.exports = findRotationCount
