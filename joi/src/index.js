/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-05-24 16:51:33
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-05-24 16:51:33
 */

const Joi = require('@hapi/joi')

const schema = Joi.object().keys({
  name: Joi.string().min(3).max(10)
})
const option = {
  language: {
    string: {
      min: '不能少于{{limit}}',
      // max: '不能大于{{limit}}'
    }
  }
}
console.log(schema)
// console.log(Joi.validate({ name: 'ac'}, schema, option).error.details)
// console.log(Joi.validate({ name: 'abc'}, schema).error)
// console.log(Joi.validate({ name: 'abcabcabcabcabcabcabcabc'}, schema, option).error.details)


