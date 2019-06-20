/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-11 20:03:28
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-11 20:03:28
 */

/** 基础用法
 * replaceReducer
 */

const {createStore, __DO_NOT_USE__ActionTypes} = require('redux') 

function counter(state = {}, action) {
  switch (action.type) {
    case 'CHAGE_NAME':
      state.name = `shuidi${action.data}`
      return state
    case __DO_NOT_USE__ActionTypes.INIT:
      state.init = true
      // console.log('emit INIT')
      return state
    default:
      return state
  }
}

function repReducer(state = {}, action) {
  switch (action.type) {
    case 'CHAGE_NAME':
      state.name = `repReducer shuidi${action.data}`
      return state
      case __DO_NOT_USE__ActionTypes.REPLACE:
      // console.log('emit REPLACE')
      return state
    default:
      return state
  }
}


let store = createStore(counter, {
  name: 'shuidi',
  age: 3,
  init: false,
  address: 'beijing, chaoyang'
})

store.subscribe(() => {
  console.log(store.getState().name)
})

store.dispatch({ type: 'CHAGE_NAME', data: 'huzhu' })
store.replaceReducer(repReducer)
store.dispatch({ type: 'CHAGE_NAME', data: 'huzhu' })