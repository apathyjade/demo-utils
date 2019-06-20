/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-06-19 10:07:34
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-06-19 10:07:34
 */

module.exports = function reducer(state = {name: 'shuidi', age: 3}, action) {
  const tmp = {}
  switch (action.type) {
    case 'CHAGE_NAME':
      tmp.name = action.data
      break
    case 'GROW_UP':
      tmp.age = state.age + 1
      break
  }
  return Object.assign({}, state, tmp)
}
