function countZeroes(arr) {
  let firstZeroFound = findFirstZero(arr)
  if (firstZeroFound === -1) return 0

  return arr.length - firstZeroFound
}

function findFirstZero(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let midIdx = low + Math.floor((high - low) / 2)
    if ((midIdx === 0 || arr[midIdx - 1] === 1) && arr[midIdx] === 0) {
      return midIdx
    } else if (arr[midIdx] === 1) {
      return findFirstZero(arr, midIdx + 1, high)
    }
    return findFirstZero(arr, low, midIdx - 1)
  }
  return -1
}

module.exports = countZeroes
