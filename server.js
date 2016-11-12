var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(process.cwd() + '/public'));

// bodyParser middleware robust==================================

// creates application/json parser=============================== 
var jsonParser = bodyParser.json()

// creates application/x-www-form-urlencoded parser==============
app.use(bodyParser.urlencoded({ extended: false }));
 
// POST /login gets urlencoded bodies============================ 
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// POST /api/users gets JSON bodies============================== 
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Listener======================================================
app.listen(port, function () {
  console.log('Listening on PORT ' + port);
});