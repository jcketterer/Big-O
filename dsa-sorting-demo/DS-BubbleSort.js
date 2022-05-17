function bubbleSort(arr) {
  count = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      count++
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  console.log('TOTAL COUNT', count)
  return arr
}

function bubbleSort2(arr) {
  count = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      count++
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  console.log('TOTAL COUNT', count)
  return arr
}

function bubbleSort3(arr) {
  count = 0
  for (let i = 0; i < arr.length; i++) {
    let swapped = false
    for (let j = 0; j < arr.length - i; j++) {
      count++
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swapped = true
      }
    }
    if (!swapped) break
  }
  console.log('TOTAL COUNT', count)
  return arr
}

console.log(
  bubbleSort([99, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
)
console.log(
  bubbleSort2([99, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
)
console.log(
  bubbleSort3([99, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
)
