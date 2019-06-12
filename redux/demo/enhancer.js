/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-11 18:00:36
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-11 18:00:36
 */

const {createStore} = require('redux') 

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

function reducer(state = {}, action) {
  switch (action.type) {
    case 'CHAGE_NAME':
      state.name = `shuidi-${action.data}`
      return state
    default:
      return state
  }
}

let store = createStore(reducer, {
  name: 'shuidi',
  age: 3,
  address: 'beijing, chaoyang'
}, noticeEnhancer)
let sub1 = store.subscribe(() => {
  console.log('1')
})
store.dispatch({ type: 'CHAGE_NAME', data: 'huzhu' })
sub1()
store.dispatch({ type: 'CHAGE_NAME', data: 'chou' })