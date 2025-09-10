var express = require('express')
  , cookieparsser = require('cookie-parser')
  , session = require('express-session')
  , metodoverritede = require('method-override')
  , load = require('express-load')
var app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(cookieparsser('ntalk'));
app.use(session());
app.use(express.urlencoded());
app.use(metodoverritede());
app.use(express.static(__dirname + '/public'));
app.use(app.routes);
app.use(express.static(__dirname + '/public'));

load('models').then('controllers').then('routes').into(app)

app.listen(3001, function () {
  console.log("Ntalk no ar.");
});

app.use(function(req, res, next) {
  res.status(404);
  res.render('not-found');
});
app.use(function(error, req, res, next) {
  res.status(500);
  res.render('server-error', error);
});
