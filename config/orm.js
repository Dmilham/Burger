var connection = require ('./connection.js');


var orm = {
	selectAll: function (cb){
		var selAll = 'SELECT * FROM burgers';
		connection.query(selAll, function(err,allRes){
			cb(allRes)
		});
	},
	insertOne: function(value, cb){
		var insOne = "INSERT INTO burgers (burger_name) VALUES ('"+ value + "');";
		connection.query(insOne, function(err,insRes){
			cb(insRes)
		});
	},
	updateOne: function (id, cb) {
		var queryString = "UPDATE burgers SET devouered=true WHERE id =" + id + ";";

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
}

module.exports = orm;