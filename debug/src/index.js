/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-02-15 11:30:26
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-02-15 11:30:26
 */

var stream=require('stream');
var fs=require('fs');
var rawStdout=process.stdout,//先拿到原来的stdout
  newStdout=new stream.PassThrough();//创建一个passthrough流，这是一种特殊的Transform流，会直接把写入的数据吐出来

process.__defineGetter__('stdout',function(){//重新定义process.stdout的Getter
  return newStdout;//返回我们的passthrough流
});

process.stdin.pipe(fs.createWriteStream('./test.text'))

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

