function insertionSort(array) {
  const arr = array.slice()
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        // const temp = arr[j]
        // arr[j] = arr[j - 1]
        // arr[j - 1] = temp
        ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      } else {
        break
      }
    }
  }
  return arr
}

function insertionSortWhileLoop(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]

    let j = i - 1

    while (arr[j] > currentValue) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentValue
  }
  return arr
}

console.log(insertionSortWhileLoop([0, -10, 7, 4]))

module.exports = insertionSort
