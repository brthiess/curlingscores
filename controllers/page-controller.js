var Competition = require('../models/competition.js');


//Home page
exports.index = function(req, res, next) {
	var competitions = Competition.fetchCurrentCompetitions();
	//Get current games for first competition in array
	var featuredCompetitionId = Object.keys(competitions)[0];
	var featuredDraw = Competition.fetchCurrentDraw(featuredCompetitionId);
	var standings = Competition.fetchStandings(featuredCompetitionId);
	
	req.app.set('layout', 'layouts/layout');
	res.render('index', {competitions: competitions, competition: featuredDraw, activeCompetitionId: featuredCompetitionId, activeDrawId: featuredDraw.drawId, standings: standings, title: "CurlingScores"});
};

exports.db = function(req, res, next){
	
	res.render('test');
};
