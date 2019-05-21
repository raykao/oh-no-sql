var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', require('../controllers/homeController').show);

router.use('/company', require('./companies'));
router.use('/jobs', require('./jobs'));
router.use('/admin', require('./admin'));
router.use('/login', require('./login'));
router.use('/members', require('./members'));

module.exports = router;
