var express = require('express')
, routes = require('./routes');
var app  = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', routes);
//app.get('/usuarios', routes.users.index);

app.listen(3000, function(){
  console.log("Ntalk no ar.");
});

