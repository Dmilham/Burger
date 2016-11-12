var router = require('express');
var connection = require('../config/connection.js');
var router = express.Router();


router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { cats: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.put('/burgers/update/<:burger_name</:burger_>', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({ burger_name: req.body.sleepy }, condition, function () {
		res.redirect('/cats');
	});
});

module.exports = router;