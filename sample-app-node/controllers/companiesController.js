const DB = require('../models/sql');

const create = function(req, res, next) {
	
}

const index = async function(req, res, next) {
	const limit = parseInt(req.query.limit) || 10;
	const currentPage = (req.query.page > 0 ? req.query.page : 1);
	const offset = (currentPage - 1) * limit;

	const companies = await DB.Company.findAll({
		limit: limit,
		offset: offset
	})

	const companiesCount = await DB.Company.count()

	res.render('companies/list', {
		companies: companies, 
		pageCount: Math.ceil(companiesCount/limit), 
		currentPage: currentPage,
		limit: limit
	})
}

const show = function(req, res, next) {
	const comapnyID = req.params.id
	
	DB.Company.findOne({
		where: {
			Id: comapnyID
		}
	})
	.then(company => {
		res.render('companies/show', {company: company});
	})
	.catch(err => {
		throw err;
	})
}

const update = function(req, res, next) {

}

const destroy = function(req, res, next) {

}

module.exports.create = create;
module.exports.index = index;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;