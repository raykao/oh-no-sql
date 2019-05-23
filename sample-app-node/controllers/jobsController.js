const Job = require('../models/sql').Job;

const create = function(req, res, next) {
	
}

const index = async function(req, res, next) {
	const limitPerPage = 5;
	const page = (req.query.page > 0 ? req.query.page : 1) - 1;
	const offset = limitPerPage * page;

	const options = {
		limit: limitPerPage,
		offset: offset
	}

	const jobs = await Job.findAll(options);
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
module.exports.index = index ;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;