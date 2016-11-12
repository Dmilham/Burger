var connection = require ('./connection.js');

var orm = {
	selectAll: function (){
		var selAll = 'SELECT * FROM Burgers';
		connection.query(selAll, function(err,allRes){
			console.log(allRes)
		});
	},
	insertOne: function(){
		var nameBurg = "submit .val() .trim()"
		var insOne = "INSERT INTO burgers (burger_name,devouered ) VALUES ('" + nameBurg + "',false)";
		connection.query(insOne, function(err,insRes){
			console.log(insRes)
		});
	},
	updateOne: function (burgers, burger_name, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});

}






module.exports = "orm";