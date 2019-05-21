const DB = require('../models/sql');

const create = function(req, res, next) {
	
}

const list = function(req, res, next) {
	DB.Company.findAll()
		.then(results => {
			res.render('companies/list', {companies: results})
		})
}

const show = function(req, res, next) {

}

const update = function(req, res, next) {

}

const destroy = function(req, res, next) {

}

module.exports.create = create;
module.exports.list = list ;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;