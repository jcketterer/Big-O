function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let swapped = false
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swapped = true
      }
    }
    if (!swapped) break
  }
  return arr
}

console.log(bubbleSort([4, 20, 12, 10, 7, 9]))

module.exports = bubbleSort
