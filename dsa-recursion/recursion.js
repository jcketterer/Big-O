/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1

  return nums[i] * product(nums, i + 1)
}

// console.log(product([2, 3, 4]))

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestStr = 0) {
  if (i === words.length) return longestStr
  longestStr = Math.max(words[i].length, longestStr)

  return longest(words, i + 1, longestStr)
}

// console.log(longest(['hi', 'hello', 'hola']))

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = '') {
  if (i >= str.length) return newStr
  newStr += str[i]
  return everyOther(str, i + 2, newStr)
}

// console.log(everyOther('hello'))

// /** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  let leftI = i
  // console.log(leftI, str[leftI])
  let rightI = str.length - i - 1
  // console.log(rightI, str[rightI])
  if (leftI >= rightI) return true
  if (str[leftI] !== str[rightI]) return false
  return isPalindrome(str, i + 1)
}

// console.log(isPalindrome('tacocat'))

// /** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1

  if (arr[i] === val) return i

  return findIndex(arr, val, i + 1)
}

// console.log(findIndex(['duck', 'cat', 'pony', 'goose', 'ant'], 'ant'))

// /** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, newStr = '') {
  if (newStr.length === str.length) return newStr
  newStr += str[str.length - 1 - i]

  return revString(str, i + 1, newStr)
}

// console.log(revString('hello'))

// /** gatherStrings: given an object, return an array of all of the string values. */

let nestedObj = {
  firstName: 'Lester',
  favoriteNumber: 22,
  moreData: {
    lastName: 'Testowitz',
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: 'you made it!',
        },
      },
    },
    favoriteString: 'nice!',
  },
}

function gatherStrings(obj) {
  let strArr = []

  for (let key in obj) {
    if (typeof obj[key] === 'string') strArr.push(obj[key])
    if (typeof obj[key] === 'object') strArr.push(...gatherStrings(obj[key]))
  }

  return strArr
}

// console.log(gatherStrings(nestedObj))

// /** binarySearch: given a sorted array of numbers, and a value,
//  * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1

  let mid = Math.floor((right + left) / 2)
  console.log(arr[mid], mid)
  if (arr[mid] === val) return mid
  if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1)
  }
  return binarySearch(arr, val, mid + 1, right)
}
//                        L  M<- M  R
console.log(binarySearch([1, 2, 3, 4], 1))

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
}
