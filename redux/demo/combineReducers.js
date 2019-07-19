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
const reducerBase = require('./common/reducer.js')

function reducerState(state = {stateDirty: false}, action) {
  switch (action.type) {
    case 'STATE_DIRTY':
      return Object.assign({}, state, {
        stateDirty: typeof action.data === 'boolean' ? action.data : undefined
      })
    case 'CHAGE_NAME':
      return Object.assign({}, state, {
        repetition: 'CHAGE_NAME'
      })
    default:
      return Object.assign({}, state)
  }
}
const reducers = combineReducers({reducerBase, reducerState})

let store = createStore(reducers)

store.subscribe(() => {
  console.log(JSON.stringify(store.getState()))
})

store.dispatch({ type: 'CHAGE_NAME', data: 'huzhu' })
store.dispatch({ type: 'GROW_UP' })
store.dispatch({ type: 'STATE_DIRTY', data: true })