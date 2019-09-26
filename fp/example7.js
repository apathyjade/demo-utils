/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-09-24 19:22:58
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-09-24 19:22:58
 */


const data = [ 0, 2, {}, true, '12']

const toNum = list => list.map(a => +a)
const filterNaN = list => list.filter(num => `${num}` !== 'NaN')
const square = list => list.map(a => a * a)
const sum = list => list.reduce((a, b) => b)

console.log( sum(square(filterNaN(toNum(data)))) ) // 144

const compose = (...args) => {
  if (args.length === 0) return args => args
  if (args.length === 1) return args[0]
  return args.reduce((a, b) => {
    return (...args) => a(b(...args))
  })
}
console.log( compose(sum, square, filterNaN, toNum)(data) )  // 144
