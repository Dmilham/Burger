var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'uyni02weieo5hld1',
	password: 'cbtd5z525qj792h7',
	database: 'ns4o37rapmw0nr0z'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});


module.exports = connection;

