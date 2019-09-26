/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-09-24 19:15:16
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-09-24 19:15:16
 */


// example 1
const array = [1, 2, 3, 4, 5, 6, 7, 8,  9]
function reverse(array) {
  const l = array.length
  for (let idx = 0; idx < l; idx++) {
    if (idx + 1 < l / 2) {
      [ array[idx], array[l - 1 - idx] ] = [ array[l - 1 - idx], array[idx] ]
    }
  }
}
reverse(array)
console.log(array)  // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// example 2
const arrayFp = [1, 2, 3, 4, 5, 6, 7, 8,  9]
console.log(arrayFp.map((it, idx, list) => {
  return list[list.length - 1 -idx]
}))                // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]