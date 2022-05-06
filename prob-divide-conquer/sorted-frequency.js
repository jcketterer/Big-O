function sortedFrequency(arr, num) {
  let first = findFirstNum(arr, num)
  if (first == -1) return first
  let last = findLastNum(arr, num)

  return last - first + 1
}

function findFirstNum(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2)
    if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
      return mid
    } else if (num > arr[mid]) {
      return findFirstNum(arr, num, mid + 1, high)
    } else {
      return findFirstNum(arr, num, low, mid - 1)
    }
  }
  return -1
}

function findLastNum(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2)
    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
      return mid
    } else if (num < arr[mid]) {
      return findLastNum(arr, num, low, mid - 1)
    } else {
      return findLastNum(arr, num, mid + 1, high)
    }
  }
  return -1
}

module.exports = sortedFrequency
