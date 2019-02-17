/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-02-15 16:07:35
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-02-15 16:07:35
 */

const fs = require('fs');
const stream = require('stream');

const newStdout = new stream.PassThrough();
const newStderr = new stream.PassThrough();

process.__defineGetter__('stdout',function(){
  return newStdout;
});
process.__defineGetter__('stderr',function(){
  return newStderr;
});  

// fs.createReadStream('./data.text')

newStdout.pipe(fs.createWriteStream('./log.log'))
newStderr.pipe(fs.createWriteStream('./error.log'))


console.log('向 stdout 中写入数据');
console.error('向 stderr 中写入数据');

newStdout.on('close', () => {
  console.log('download finished');
});
newStderr.on('close', () => {
  console.log('download finished');
});

// let totalLength = 0;
// readStream.on('response', (response) => {
//   console.log('response headers is: ', response.headers);
// });

// readStream.on('data', (chunk) => {
//   totalLength += chunk.length;
//   console.log('recevied data size: ' + totalLength + 'KB');
// });

// writeStream.on('close', () => {
//   console.log('download finished');
// });
// readStream.write('ceshi')