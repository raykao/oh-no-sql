const Job = require('../models/sql').Job;

const create = function(req, res, next) {
	
}

const list = async function(req, res, next) {
	const limitPerPage = 10;
	const page = (req.query.page > 0 ? req.query.page : 1) - 1;
	const offset = limit * page;

	const options = {
		limit: limitPerPage,
		offset: offset
	}

	const jobs = await Job.findAll();
	const jobsCount = await Job.count();

	res.render('jobs/index', {jobs: jobs, requestedPage: page, pageCount: (jobsCount/limitPerPage)})
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