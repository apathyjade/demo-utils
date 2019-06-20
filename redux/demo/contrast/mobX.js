/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-18 19:41:25
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-18 19:41:25
 */

const {observable, autorun} = require('mobx')
const appState = observable({
  name: 'shuidi',
  age: 3,
  get willAge () {
    console.log('--- willAge ---')
    return this.age + 1
  }
})
autorun(() => {
  console.log(appState.age)
  setTimeout(() => {
    console.log(appState.name)
  }, 0)
})
appState.willAge;
appState.willAge;
// appState.age += 1
// // appState.age += 1
// setTimeout(() => {
//   appState.age += 1
//   appState.name = 'test'
// }, 100)
