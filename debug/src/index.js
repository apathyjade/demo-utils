/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-02-15 11:30:26
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-02-15 11:30:26
 */



const debug = require('debug')
debug.enable('app:*');

debug.formatters.h = (v) => {
  console.log(v)
  return v.toString('hex')
}

const debugApp = debug('app');
debugApp.enabled = true;
const logSign = debugApp.extend('sign');
const logLogin = debugApp.extend('login');

// logSign.enabled = true;
// logLogin.enabled = true;

logSign('listening')
logLogin('%o', {a: 12, b: 13})
logLogin('%O', {a: 12, b: 13})
logLogin('%s', '{a: 12, b: 13}')
logLogin('%d', 122)
logLogin('a%ja', {a: 12, b: 13})
logLogin('a%%a')

logSign('this is: %h','hello world')

