/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-09-24 19:22:58
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-09-24 19:22:58
 */

// curry
const add = (a, b) => a + b

currAdd = a => b => add(a, b)
console.log( currAdd(2)(5) )  // 7

const curr = (fn) => a => b => fn(a, b)
console.log( curr(add)(2)(5) )  // 7


const add = (...args) => args.reduce((a, b) => a + b)
const currying = (fn, ...args1) => (...args2) => fn(...args1.concat(args2))
console.log( currying(add, 2, 8)(5, 6) )  // 21


const add = (...args) => args.reduce((a, b) => a + b)
const curry = (fn, ...args1) => (...args2) => fn(...args1.concat(args2))
const currySuper = (fn, length) => {
  length = length || fn.length
  return (...args) => {
    return args.length >= length 
      ? fn(...args)
      : currySuper(curry(fn, ...args), length - args.length)
  }
}
console.log( currySuper(add, 5)(1)(2)(3)(4)(5) ) // 15
console.log( currySuper(add, 5)(1, 2)(3, 4)(5) ) // 15
console.log( currySuper(add, 5)(1, 2, 3)(4, 5) ) // 15
console.log( currySuper(add, 5)(1, 2, 3, 4, 5) ) // 15