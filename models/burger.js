var orm = require ('../config/orm.js')

var burger = {
		all: function (cb) {
		orm.selectAll(function (allRes) {
			cb(allRes);
		});
	},
		insert: function(name, cb){
		orm.insertOne(name, function(oneRes){
			cb(oneRes);

		});
	},
		update: function (id, cb){
		orm.updateOne( id, function (upRes) {
			cb(upRes);
		});
	}
};

module.exports = burger;