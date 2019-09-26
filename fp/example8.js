/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-09-06 10:33:44
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-09-06 10:33:44
 */


// 惰性计算
const compute = list => {
  console.log('执行 compute +1')
  return list.reduce((a, b) => a + b)
} 
let getValue = () => {
  let value = null
  getValue = () => value
  value = compute([1, 2, 3, 4, 5, 6, 7, 8, 9])
  return value
}
console.log( getValue() )
console.log( getValue() )
console.log( getValue() )
// 输出内容
// 执行 compute +1
// 45
// 45
// 45

const compute = list => {
  console.log('执行 compute +1')
  return list.reduce((a, b) => a + b)
} 
let a = {
  valueOf: function () {
    return (a = compute([1, 2, 3, 4, 5, 6, 7, 8, 9]))
  }
}
console.log( '---' + a + '---' )
console.log( '---' + a + '---' )
console.log( '---' + a + '---' )

// 执行 compute +1
// 45
// 45
// 45