/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-10 10:35:30
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-10 10:35:30
 */


/**
 * combineReducers
 */

const {createStore, combineReducers} = require('redux') 

function reducerBase(state = {name: 'huzhu', age: 3}, action) {
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
function reducerState(state = {stateInit: false, stateDirty: false}, action) {
  switch (action.type) {
    case 'STATE_INIT':
      typeof action.data === 'boolean' && (state.stateInit = action.data)
      return state
    case 'STATE_DIRTY':
      typeof action.data === 'boolean' && (state.stateDirty = action.data)
      return state
    default:
      return state
  }
}
const reducers = combineReducers({reducerBase, reducerState})

let store = createStore(reducers)

store.subscribe(() => {
  console.log(JSON.stringify(store.getState()))
})

store.dispatch({ type: 'CHAGE_NAME', data: 'huzhu' })
store.dispatch({ type: 'GROW_UP', data: 'huzhu' })
store.dispatch({ type: 'STATE_INIT', data: 'huzhu' })
store.dispatch({ type: 'STATE_DIRTY', data: 'huzhu' })