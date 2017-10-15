var express = require('express');
var router = express.Router();

var controller = require('../controllers/page-controller');
/* GET home page. */
router.get('/', controller.index);

router.get('/schedule', controller.schedule);

router.get('/scores', controller.scores);

router.get('/rankings', controller.rankings);
router.get('/teams/:category?', controller.teams);

module.exports = router;
