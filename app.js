var express = require('express')
, cookieparsser= require('cookie-parser')
, session = require('express-session')
, routes = require('./routes');
var app  = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieparsser('ntalk'));
app.use(session());
app.use(express.urlencoded());
app.use(express.method0verride());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.get('/', routes);
//app.get('/usuarios', routes.users.index);

app.listen(3000, function(){
  console.log("Ntalk no ar.");
});

