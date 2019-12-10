/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-12-09 15:48:08
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-12-09 15:48:08
 */

const recast = require("recast");
const fs = require('fs-extra')




const code = fs.readFileSync('./index.js')
// 用螺丝刀解析机器
const ast = recast.parse(code);

// ast可以处理很巨大的代码文件
// 但我们现在只需要代码块的第一个body，即add函数
const add  = ast.program.body

console.dir(add)