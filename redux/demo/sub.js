/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-10 10:35:30
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-10 10:35:30
 */


// subscribe 测试说明

const {createStore} = require('redux') 



let store = createStore(counter, {
  name: 'shuidi',
  age: 3,
  address: 'beijing, chaoyang'
})

store.subscribe(() => {
  let state = store.getState()
  console.log(state)
})

store.dispatch({ type: 'NN' })

store.dispatch({ type: 'CHAGE_NAME', data: 'huzhu' })

store.dispatch({ type: 'GROW_UP' })

store.dispatch({ type: 'NN' })

function counter(state = {}, action) {
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