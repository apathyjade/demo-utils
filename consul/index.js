

var consul = require('consul')({
  host: 'consul.zelda.shuiditech.com',
  port: '8500',
  promisify: true
});
// consul.kv.get('zelda').then((d) => {
//   console.log(d)
// })

// consul.catalog.service.list().then(function(result) {
//   console.log(JSON.stringify(result))
// })
consul.catalog.node.list().then(function(result) {
  console.log(JSON.stringify(result))
})

// consul.kv.get('spring-cloud-starter-consul-discovery', function(err, result) {
//   if (err) throw err;
// });