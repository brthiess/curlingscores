Competition = require('../models/competition.js');

//Is given the competition ID and returns the current scores as a view
exports.getScoresView = function(req, res, next){
	var competitions = Competition.fetchCurrentCompetitions();
	var featuredCompetition = Competition.fetchCurrentDraw(req.params.competitionId);
	var standings = Competition.fetchStandings(req.params.competitionId);
	req.app.set('layout', false);
	res.render('partials/scoreboard/scores-all', {competition: featuredCompetition, standings: standings});
}