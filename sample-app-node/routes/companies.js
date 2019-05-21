var express = require('express');
var router = express.Router();
var CompanyController = require('../controllers/companiesController')

/* GET users listing. */
router.get('/', CompanyController.list);
router.get('/:id', CompanyController.show);

router.post('/', CompanyController.create);
router.put('/', CompanyController.update);
router.delete('/', CompanyController.destroy);

module.exports = router;
