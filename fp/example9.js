/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-09-06 10:33:44
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-09-06 10:33:44
 */

totalizer = (n) => {
  if (n = 1) {
    return 1
  }
  return n + totalizer(n - 1)
}

// totalizer = (n, r) => {
//   r = r || 1
//   if (n === 1) {
//     return r
//   }
//   return totalizer(n - 1, 2 * r + 1)
// }


consoleTime = (fn, s) => {
  console.time(s);
  fn()
  console.timeEnd(s);
}
consoleTime(() => totalizer(10), 'n = 10 timer: ')
consoleTime(() => totalizer(40), 'n = 20 timer: ')
consoleTime(() => totalizer(1000), 'n = 20 timer: ')




// 尾递归 斐波那契数列

fn1 = (n) => {
  if (n < 3) return 1
  return fn1(n - 1) + fn1(n - 2)
}

fn2 = (n, r1, r2) => {
  if (n === 1) return r1
  return fn2(n - 1, r2, r2 + r1)
}

consoleTime = (fn, s) => {
  console.time(s);
  fn()
  console.timeEnd(s);
}

consoleTime(() => fn1(40), 'fn1 40 time: ') // 915.752 ms
consoleTime(() => fn2(8949, 1, 1), 'fn2 800 time: ') // 2.451ms
console.log(fn2(40, 1, 1) === fn1(40)) // true