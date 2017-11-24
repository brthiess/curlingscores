var express = require('express');
var router = express.Router();

var viewController = require("../controllers/view-controller.js");
/* GET scores */
router.get('/scores/draws/:competitionId/:drawId?', viewController.getScoresGamesView);
router.get('/scores/:competitionId/:drawId?', viewController.getScoresView);

/* Get games */
router.get('/games/:gameId', viewController.getModalGameView);


router.get('/rankings/:showType/:category/:year/:number?', viewController.getRankingsView);

router.get('/schedule/:category/:year', viewController.getScheduleView);

router.get('/teams/:category/', viewController.getTeamsView);

router.get('/teams/:scores/');
module.exports = router;

