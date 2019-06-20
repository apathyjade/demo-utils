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
const reducer = require('./common/reducer.js')

let store = createStore(reducer, {
  name: '预存',
  age: 3
})

let sub1 = store.subscribe(() => {
  console.log('--- 分割线 sub1 ---')
  console.log('这条信息会解绑')
  console.log('--- 分割线 sub1 end ---')
})
store.subscribe(function () {
  console.log(JSON.stringify(store.getState()))
})

store.dispatch({ type: 'GROW_UP'})
sub1()
store.dispatch({ type: 'CHAGE_NAME', data: 'huzhu' })

