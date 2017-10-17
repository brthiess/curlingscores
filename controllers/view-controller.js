Competition = require('../models/competition.js');
var Game = require('../models/game.js');
var Ranking = require('../models/rankings.js');
var Schedule = require('../models/schedule.js');
var Teams = require('../models/team.js');
//Is given the competition ID and returns the current scores as a view
exports.getScoresView = function(req, res, next){
	var competitions = Competition.fetchCurrentCompetitions();
	var featuredCompetition = Competition.fetchCurrentDraw(req.params.competitionId);
	var standings = Competition.fetchStandings(req.params.competitionId);
	req.app.set('layout', false);
	res.render('partials/scoreboard/scores-all', {competition: featuredCompetition, standings: standings});
}

//Is given the game ID and returns the game details as a view
exports.getModalGameView = function(req, res, next) {
	var game = Game.fetchGameById(req.params.gameId);
	req.app.set('layout', false);
	res.render('partials/game/game', {game: game});
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