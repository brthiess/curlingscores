Competition = require('../models/competition.js');
exports.getCompetitionDraw = function(req, res, next){
	var drawScores = Competition.fetchDrawScoresByDrawId(req.params.competitionId, req.params.drawId);
	res.json(drawScores);
}