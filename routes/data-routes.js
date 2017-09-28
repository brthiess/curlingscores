var express = require('express');
var router = express.Router();

var dataController = require("../controllers/data-controller.js");
/* GET scores */
router.get('/scores/:competitionId/:drawId', dataController.getCompetitionDraw);

module.exports = router;
