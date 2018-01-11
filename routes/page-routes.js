var express = require('express');
var router = express.Router();

var controller = require('../controllers/page-controller');
/* GET home page. */
router.get('/', controller.index);

router.get('/test', controller.db);

module.exports = router;
