/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-11 18:00:36
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-11 18:00:36
 */

const {createStore} = require('redux')
const reducer = require('./common/reducer.js')

let noticeEnhancer = createStore => (counter, defState) => {
  let store = createStore(counter, defState)
  let subscribe = (...arg) => {
    const res = store.subscribe(...arg);
    console.log(`subscribe done`);
    return (...arg) => {
      res(...arg)
      console.log(`unsubscribe done`);
    };
  }
  return {...store, subscribe}
}

let store = createStore(reducer, {
  name: 'shuidi',
  age: 3
}, noticeEnhancer)
let sub1 = store.subscribe(() => {
  console.log(JSON.stringify(store.getState()))
})
store.dispatch({ type: 'CHAGE_NAME', data: 'huzhu' })
sub1()
store.dispatch({ type: 'CHAGE_NAME', data: 'chou' })