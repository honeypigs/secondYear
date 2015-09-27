// var express = require('express');
// var app = express();


// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });



// app.get('/example/a', function (req, res) {
//   res.send('Hello from A!');
// });


// app.get('/example/b', function (req, res, next) {
//   console.log('response will be sent by the next function ...');
//   next();
// }, function (req, res) {
//   res.send('Hello from B!');
// });


// var cb0 = function (req, res, next) {
//   console.log('CB0');
//   next();
// }

// var cb1 = function (req, res, next) {
//   console.log('CB1');
//   next();
// }

// var cb2 = function (req, res) {
//   res.send('Hello from C!');
// }

// app.get('/example/c', [cb0, cb1, cb2]);


// var cb0 = function (req, res, next) {
//   console.log('CB0');
//   next();
// }

// var cb1 = function (req, res, next) {
//   console.log('CB1');
//   next();
// }

// app.get('/example/d', [cb0, cb1], function (req, res, next) {
//   console.log('response will be sent by the next function ...');
//   next();
// }, function (req, res) {
//   res.send('Hello from D!');
// });


var express = require('express');
var router = express.Router();


app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });//链式路由句柄




// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// 定义网站主页的路由
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// 定义 about 页面的路由
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
