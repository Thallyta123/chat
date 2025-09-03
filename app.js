var express = require('express')
  , cookieparsser = require('cookie-parser')
  , session = require('express-session')
  , metodoverritede = require('method-override')
  , load = require('express-load')
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieparsser('ntalk'));
app.use(session());
app.use(express.urlencoded());
app.use(metodoverritede());
app.use(express.json());
app.use(express.static(__dirname + '/public'));

load('models').then('controllers').then('routes').into(app)


app.listen(3000, function () {
  console.log("Ntalk no ar.");
});

