/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-11 18:00:36
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-11 18:00:36
 */

const {createStore, compose} = require('redux') 

let noticeEnhancer1 = enhancer => createStore => (counter, defState) => {
  let store = createStore(counter, defState, enhancer)
  let subscribe = (...arg) => {
    const res = store.subscribe(...arg);
    console.log(`noticeEnhancer1`);
    return res
  }
  return {...store, subscribe}
}

let noticeEnhancer2 = enhancer => createStore => (counter, defState) => {
  let store = createStore(counter, defState, enhancer)
  let subscribe = (...arg) => {
    const res = store.subscribe(...arg);
    console.log(`noticeEnhancer2`);
    return res
  }
  return {...store, subscribe}
}

let noticeEnhancer3 = enhancer => createStore => (counter, defState) => {
  let store = createStore(counter, defState, enhancer)
  let subscribe = (...arg) => {
    const res = store.subscribe(...arg);
    console.log(`noticeEnhancer3`);
    return res
  }
  return {...store, subscribe}
}

const normalEnhancer = noticeEnhancer3(noticeEnhancer2(noticeEnhancer1()))
const composeEnhancer = compose(noticeEnhancer3(), noticeEnhancer2(), noticeEnhancer1())


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
}, composeEnhancer)
store.subscribe(() => {})
store.dispatch({ type: 'CHAGE_NAME', data: 'chou' })