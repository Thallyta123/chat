var express = require('express')
  , load = require('express-load')
  , app = express();
// ...stack de configurações do servidor...
load('models')
  .then('controllers')
  .then('routes')
  .into(app);
// app.get('/usuarios', routes.user.index);
app.listen(3001, function () {
  console.log("Ntalk no ar.");
});

// var express = require('express')
// , routes = require('./routes')
// // , cookieparsser = require('cookie-parser')
// // , session = require('express-session')
// , metodoverritede = require('method-override')
// , load = require('express-load')
// // , erro = require('./error.js')
// // , server = require('./middleware/error') 
// // , io = require('socket.io').listen(server)
// // , server = require('http').createServer(app)
// var app = express();

// app.use(express.json());
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
// // app.use(cookieparsser('ntalk'));
// // app.use(session());
// app.use(express.urlencoded());
// app.use(metodoverritede());
// app.use(express.static(__dirname + '/public'));

// load('models')
//  .then('controllers')
//  .then('routes')
//  .into(app);

// // load('models').then('controllers').then('routes').into(app)
// // load('sockets')
// // .into(io);

// // app.use(erro.notFound);
// // app.use(erro.serverError);
// app.listen(3001, function () {
//   console.log("Ntalk no ar.");
// }); 

// // module.exports = function(io) {
// //   var sockets = io.sockets;
// //   sockets.on('connection', function (client) {
// //     client.on('send-server', function (data) {
// //       var msg = "<b>"+data.nome+":</b> "+data.msg+"<br>";
// //       client.emit('send-clint', msg);
// //       client.broadcast.emit('send-client', msg);
// //     });
// //   });
// // }








