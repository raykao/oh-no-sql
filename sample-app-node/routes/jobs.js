const express = require('express');
const router = express.Router();
const JobsController = require('../controllers/jobsController');

/* GET users listing. */
router.get('/',JobsController.index);

router.post('/', JobsController.create);

router.get('/:id', JobsController.show);

router.put('/', JobsController.update);

router.delete('/', JobsController.destroy);

module.exports = router;
