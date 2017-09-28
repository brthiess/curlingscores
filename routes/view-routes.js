var express = require('express');
var router = express.Router();

var viewController = require("../controllers/view-controller.js");
/* GET scores */
router.get('/scores/:competitionId', viewController.getScoresView);

module.exports = router;
