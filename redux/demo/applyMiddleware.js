/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-11 18:00:36
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-11 18:00:36
 */

const {createStore, bindActionCreators, applyMiddleware} = require('redux')
const reducer = require('./common/reducer.js')

let noticeEnhancer1 =  ({dispatch, getState}) => next => action => {
  console.log(`noticeEnhancer1`);
  return next(action)
}
let noticeEnhancer2 =  ({dispatch, getState}) => next => action => {
  console.log(`noticeEnhancer2`);
  // console.log(action.type)
  return next(action)
}

let store = createStore(reducer, applyMiddleware(noticeEnhancer1, noticeEnhancer2))

let actions = {
  changeName (data) {
    return {type: 'CHAGE_NAME', data}
  },
  growUp () {
    return {type: 'GROW_UP'}
  }
}
store.subscribe(() => {
  // console.log(JSON.stringify(store.getState()))
})

let methods = bindActionCreators(actions, store.dispatch)

methods.changeName('china')
methods.growUp()

