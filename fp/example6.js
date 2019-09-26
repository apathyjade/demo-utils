/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-09-24 19:22:58
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-09-24 19:22:58
 */

const add = (a, b) => a + b
const minus = (a, b) => a - b

// 3 + 2 - 4
console.log( minus(add(3, 2), 4) ) // 1


const add2 = num => num + 2
const minus4 = num => num - 4

const compose = (...args) => {
  if (args.length === 0) return args => args
  if (args.length === 1) return args[0]
  return args.reduce((a, b) => {
    return (...args) => a(b(...args))
  })
}

// 3 + 2 - 4
console.log( compose(add2, minus4)(3) ) // 1