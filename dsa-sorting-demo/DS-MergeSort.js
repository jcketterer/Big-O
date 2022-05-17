//    i          j
// [5,9,20] [1,3,6]

function mergeArr(arr1, arr2) {
  let newArr = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i])
      i++
    } else {
      newArr.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    newArr.push(arr2[j])
    j++
  }
  return newArr
}

function mergeSort(arr) {
  //base case
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return mergeArr(left, right)

  //typical case
}

console.log(mergeSort([4, 45, 67, 1, -9, 99, 23, 24, 77, 100]))
