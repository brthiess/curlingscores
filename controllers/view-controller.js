var Event = require('../models/event');

//Is given the competition ID and returns the current scores as a view
exports.getScoresView = function(req, res, next){
	var events = Event.fetchCurrentDrawByEventId(req.params.competitionId, function(event) {
		req.app.set('layout', false)
		res.render("partials/scoreboard/scores-all", {competition: event, asyncScoreboardLoading: false	});
	});
}

//Is given the game ID and returns the game details as a view
exports.getModalGameView = function(req, res, next) {
	var game = Event.fetchGameById(req.params.gameId);
	console.log(game);
	req.app.set('layout', false);
	res.render('partials/game/game', {game: game});

}

exports.getScoresGamesView = function(req, res, next){
	var featuredCompetition;
	if(req.params.drawId != undefined){
		featuredCompetition = Competition.fetchDrawScoresByDrawId(req.params.competitionId, req.params.drawId);
	}
	else {
		featuredCompetition = Competition.fetchCurrentDraw(req.params.competitionId);
	}
	req.app.set('layout', false);
	res.render('partials/scoreboard/scores-games', {competition: featuredCompetition});
}


exports.getRankingsView = function(req, res, next) {
	if(req.params.number == null){
		req.params.number = 20;
	}
	if(req.params.showType == null){
		req.params.showType = 'oom';
	}
	var rankings = Ranking.fetchTopRankings(req.params.number, req.params.category, req.params.year)
	rankings.showType = req.params.showType;
	req.app.set('layout', false);
	res.render('partials/ranking/rankings-table', {rankings: rankings, });
}

exports.getScheduleView = function(req, res, next) {
	var schedule = Schedule.fetchSchedule(req.params.category, req.params.year);
	req.app.set('layout', false);
	schedule.events = Schedule.convertEventDatesToSimple(schedule.events);
	res.render('partials/schedule/schedule-table', {schedule: schedule});
}

exports.getTeamsView = function(req, res, next){
	req.app.set('layout', false);
	var teams = Teams.fetchTeams(req.params.category);
	res.render('partials/team/teams-table', {teams: teams});
}