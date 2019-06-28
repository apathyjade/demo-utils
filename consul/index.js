

var consul = require('consul')({
  host: 'consul.zelda.shuiditech.com',
  port: '8500',
});
// consul.catalog.service.list(function(err, result) {
//   if (err) throw err;
//   console.log(JSON.stringify(result))
// });
consul.catalog.node.list(function(err, result) {
  if (err) throw err;
  console.log(JSON.stringify(result))
});

// consul.kv.get('spring-cloud-starter-consul-discovery', function(err, result) {
//   if (err) throw err;
// });