/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-11 18:00:36
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-11 18:00:36
 */

const {createStore, bindActionCreators} = require('redux')
const reducer = require('./common/reducer.js')

let store = createStore(reducer)

let actions = {
  changeName (data) {
    return {type: 'CHAGE_NAME', data}
  },
  growUp () {
    return {type: 'GROW_UP'}
  }
}
store.subscribe(() => {
  console.log(JSON.stringify(store.getState()))
})

let methods = bindActionCreators(actions, store.dispatch)

methods.changeName('china')
methods.growUp()

