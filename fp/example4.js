/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-09-24 19:22:58
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-09-24 19:22:58
 */


const array = [1, 2, 3, 4, 5, 6, 7, 8,  9]

// map
console.log(array.map(it => it * it))  
// ==> [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// reduce
console.log(array.reduce((last, curr, index, array) => last + curr))
// ==> 45