var express = require('express')
  , cookieparsser = require('cookie-parser')
  , session = require('express-session')
  , metodoverritede = require('method-override')
  , load = require('express-load')
  , erro = require('./error.js')
var app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(cookieparsser('ntalk'));
app.use(session());
app.use(express.urlencoded());
app.use(metodoverritede());
app.use(express.static(__dirname + '/public'));

load('models').then('controllers').then('routes').into(app)

app.use(erro.notFound);
app.use(erro.serverError);
app.listen(3001, function () {
  console.log("Ntalk no ar.");
}); 
