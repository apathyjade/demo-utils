/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-09-24 19:22:28
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-09-24 19:22:28
 */

// 非纯函数
toFixed = (n, m) => n.toFixed(m)
const add = (a, b) => toFixed((a + b), 2)
// 纯函数
const add = (a, b, toFixed) => toFixed((a + b), 2)

// 非纯函数
const exchange = (array) => {
  [array[0], array[1]] = [array[1], array[0]]
  return array
}
// 纯函数
const exchange = ([a, b]) => [b, a]