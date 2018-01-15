var Event = require('../models/event');


exports.getCompetitionDraw = function(req, res, next){
	var events = Event.fetchDrawScoresByDrawId(req.params.competitionId, req.params.drawId, function(drawScores) {
		if (drawScores != null){
			req.app.set('layout', false)
			res.json(drawScores);
		}
	});

}