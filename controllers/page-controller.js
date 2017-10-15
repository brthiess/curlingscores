var Competition = require('../models/competition.js');
var Social = require('../models/social.js');
var Rankings = require('../models/rankings.js');
var Schedule = require('../models/schedule.js');
var Teams = require('../models/team.js')


//Home page
exports.index = function(req, res, next) {
	var competitions = Competition.fetchCurrentCompetitions();
	//Get current games for first competition in array
	var featuredCompetitionId = Object.keys(competitions)[0];
	var featuredDraw = Competition.fetchCurrentDraw(featuredCompetitionId);
	var standings = Competition.fetchStandings(featuredCompetitionId);
	var socialMedia = Social.fetchRecentPosts(10);
	var rankings = Rankings.fetchTopRankings(20, 'men', 2018);
	var rankingsCategories = Rankings.fetchCategories();
	req.app.set('layout', 'layouts/layout');
	res.render('index', {competitions: competitions, competition: featuredDraw, activeCompetitionId: featuredCompetitionId, activeDrawId: featuredDraw.drawId, standings: standings, rankings: rankings, categories: rankingsCategories, showLinkToFullRankings: true, title: "World Curling Tour", posts: socialMedia});
};

exports.schedule = function(req, res, next){
	req.app.set('layout', 'layouts/layout');
	var schedule = Schedule.fetchSchedule('men', 2018);
	var scheduleCategories = Schedule.fetchCategories();
	schedule.events = Schedule.convertEventDatesToSimple(schedule.events);
	res.render('partials/schedule/schedule', {schedule: schedule, categories: scheduleCategories, title: "Schedule"});
}

exports.scores = function(req, res, next){
	req.app.set('layout', 'layouts/layout');
	var competitions = Competition.fetchCurrentCompetitions();
	//Get current games for first competition in array
	var featuredCompetitionId = Object.keys(competitions)[0];
	var featuredDraw = Competition.fetchCurrentDraw(featuredCompetitionId);
	var standings = Competition.fetchStandings(featuredCompetitionId);
	res.render('partials/scoreboard', {competitions: competitions, competition: featuredDraw, activeCompetitionId: featuredCompetitionId, activeDrawId: featuredDraw.drawId, standings: standings, title: "World Curling Tour"});
}

exports.rankings = function(req, res, next){
	req.app.set('layout', 'layouts/layout');
	var rankings = Rankings.fetchTopRankings(2000, 'men', 2018);
	var rankingsCategories = Rankings.fetchCategories();
	res.render('partials/ranking/rankings', {rankings: rankings, categories: rankingsCategories});
}

exports.teams = function(req, res, next){
	if(req.params.category == null){
		req.params.category = 'men';
	}
	req.app.set('layout', 'layouts/layout');
	req.app.set('layout', 'layouts/layout');
	var teams = Teams.fetchTeams(req.params.category);
	var teamCategories = Teams.fetchCategories();
	res.render('partials/team/teams', {teams: teams, categories: teamCategories, currentCategory: req.params.category});
}