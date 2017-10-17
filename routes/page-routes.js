var express = require('express');
var router = express.Router();

var controller = require('../controllers/page-controller');
/* GET home page. */
router.get('/', controller.index);

router.get('/schedule/:category?/:year?', controller.schedule);

router.get('/scores', controller.scores);

router.get('/rankings/:showType?/:category?/:year?', controller.rankings);

router.get('/teams/:teamId([0-9]{1,50})', controller.team);
router.get('/teams/:category?', controller.teams);

router.get('/contact', controller.contact);

module.exports = router;
