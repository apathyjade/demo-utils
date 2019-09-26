/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-09-24 19:22:58
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-09-24 19:22:58
 */

// 参数为 function
const HighFn1 = a => a()
// 返回值为 function
const HighFn2 = a => b => a + b
// 同时满足 
const HighFn2 = a => b => a(b)