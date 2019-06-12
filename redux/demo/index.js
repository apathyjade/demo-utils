/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-10 10:35:30
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-10 10:35:30
 */


/** 基础用法
 * dispatch,
 * subscribe,
 * getState,
 */

const {createStore} = require('redux') 

function reducer(state = {}, action) {
  // console.log(state)
  switch (action.type) {
    case 'CHAGE_NAME':
      state.name = `shuidi${action.data}`
      return state
    case 'GROW_UP':
        state.age++
      return state
    default:
      return state
  }
}

let store = createStore(reducer, {
  name: 'shuidi',
  age: 3,
  address: 'beijing, chaoyang'
})

let sub1 = store.subscribe(() => {
  console.log('1')
})
let sub2 = store.subscribe(() => {
  console.log('2')
})
let sub3 = store.subscribe(() => {
  console.log('3')
})

sub1()

store.dispatch({ type: 'CHAGE_NAME', data: 'huzhu' })
