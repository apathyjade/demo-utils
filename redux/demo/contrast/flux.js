/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-18 18:13:09
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-18 18:13:09
 */

const EventEmitter = require('events');
const {Dispatcher} = require('flux')

class Store extends EventEmitter {
  constructor (data) {
    super()
    return Object.assign(this, data)
  }
}

const store = new Store({
  name: 'shuidi',
  age: 3
})

const flightDispatcher = new Dispatcher()

flightDispatcher.register(function(action) {
  if (action.actionType === 'grow-up') {
    store.age += action.data || 1
    store.emit('change')
  }
})

store.on('change', () => {
  console.log('had change')
})

flightDispatcher.dispatch({
  actionType: 'grow-up',
  data: 2
});