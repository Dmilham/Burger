var orm = require ('../config/orm.js')

var burger = {
		selectAll: function (cb) {
		orm.selectAll('burgers', function (allRes) {
			cb(allRes);
		});
	},
		insOne: function(){
		orm.insOne('burgers', burger_name function(){

		});
	},
			update: function (objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;