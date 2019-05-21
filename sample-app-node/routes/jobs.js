const express = require('express');
const router = express.Router();
const JobsController = require('../controllers/jobsController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', JobsController.create);

router.get('/', JobsController.list);
router.get('/:id', JobsController.show);

router.put('/', JobsController.update);

router.delete('/', JobsController.destroy);

module.exports = router;
