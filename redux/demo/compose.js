/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-11 18:00:36
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-11 18:00:36
 */

const {createStore, compose} = require('redux')
const reducer = require('./common/reducer.js')

let noticeEnhancer1 = enhancer => createStore => (counter, defState) => {
  console.log(typeof enhancer)
  let store = createStore(counter, defState, enhancer)
  let subscribe = (...arg) => {
    const res = store.subscribe(...arg);
    console.log(`noticeEnhancer1`);
    return res
  }
  return {...store, subscribe}
}

let noticeEnhancer2 = enhancer => createStore => (counter, defState) => {
  console.log(typeof enhancer)
  let store = createStore(counter, defState, enhancer)
  let subscribe = (...arg) => {
    const res = store.subscribe(...arg);
    console.log(`noticeEnhancer2`);
    return res
  }
  return {...store, subscribe}
}

let noticeEnhancer3 = enhancer => createStore => (counter, defState) => {
  console.log(typeof enhancer)
  let store = createStore(counter, defState, enhancer)
  let subscribe = (...arg) => {
    const res = store.subscribe(...arg);
    console.log(`noticeEnhancer3`);
    return res
  }
  return {...store, subscribe}
}

const Enhancer1 = ((...args) => noticeEnhancer3(noticeEnhancer2(noticeEnhancer1(...args))))()
const Enhancer2 = compose(noticeEnhancer3, noticeEnhancer2, noticeEnhancer1)()


const Enhancer3 = (...arg) => noticeEnhancer3()(noticeEnhancer2()(noticeEnhancer1()(...arg)))
const Enhancer4 = compose(noticeEnhancer3(), noticeEnhancer2(), noticeEnhancer1())

let store = createStore(reducer, {
  name: 'shuidi',
  age: 3
}, Enhancer3)
store.subscribe(() => {})
store.dispatch({ type: 'CHAGE_NAME', data: 'chou' })