var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var port = 3000;
var connection = require('/config/connection.js')

// bodyParser middleware robust==================================

// creates application/json parser=============================== 
var jsonParser = bodyParser.json()

// creates application/x-www-form-urlencoded parser==============
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// POST /login gets urlencoded bodies============================ 
app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
})
 
// POST /api/users gets JSON bodies============================== 
app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // create user in req.body 
})

// Listener======================================================
app.listen(port, function () {
  console.log('Listening on PORT ' + port);
});