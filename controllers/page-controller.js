var Competition = require('../models/competition.js');
var Social = require('../models/social.js');
var Rankings = require('../models/rankings.js');
var Schedule = require('../models/schedule.js');
var Teams = require('../models/team.js');
var Slides = require('../models/slide.js');

//Home page
exports.index = function(req, res, next) {
	var competitions = Competition.fetchCurrentCompetitions();
	//Get current games for first competition in array
	var featuredCompetitionId = Object.keys(competitions)[0];
	var featuredDraw = Competition.fetchCurrentDraw(featuredCompetitionId);
	var standings = Competition.fetchStandings(featuredCompetitionId);
	var socialMedia = Social.fetchRecentPosts(10);
	var rankings = Rankings.fetchTopRankings(20, 'men', 2018);
	rankings.showType = 'oom';
	var rankingsCategories = Rankings.fetchCategories();
	var slides = Slides.getSlides();
	console.log(slides);
	req.app.set('layout', 'layouts/layout');
	res.render('index', {competitions: competitions, competition: featuredDraw, activeCompetitionId: featuredCompetitionId, activeDrawId: featuredDraw.drawId, standings: standings, rankings: rankings, categories: rankingsCategories, showLinkToFullRankings: true, title: "World Curling Tour", posts: socialMedia, numRankings: 20, slides: slides});
};

exports.schedule = function(req, res, next){
	if(req.params.category == null){
		req.params.category = 'men';
	}
	//TODO: Don't hardcode year
	if(req.params.year == null){
		req.params.year = 2018;
	}
	req.app.set('layout', 'layouts/layout');
	var schedule = Schedule.fetchSchedule(req.params.category, req.params.year);
	var scheduleCategories = Schedule.fetchCategories();
	schedule.events = Schedule.convertEventDatesToSimple(schedule.events);
	
	res.render('partials/schedule/schedule', {schedule: schedule, categories: scheduleCategories, title: "Schedule", replaceHistory: true});
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
		if(req.params.category == null){
		req.params.category = 'men';
	}
	//TODO: Don't hardcode year
	if(req.params.year == null){
		req.params.year = 2018;
	}
	if(req.params.showType == null){
		req.params.showType = 'oom';
	}
	var rankings = Rankings.fetchTopRankings(2000, req.params.category, req.params.year);
	rankings.showType = req.params.showType;
	var rankingsCategories = Rankings.fetchCategories();
	res.render('partials/ranking/rankings', {rankings: rankings, categories: rankingsCategories, replaceHistory: true, numRankings: 1000});
}

exports.teams = function(req, res, next){
	if(req.params.category == null){
		req.params.category = 'men';
	}
	req.app.set('layout', 'layouts/layout');
	var teams = Teams.fetchTeams(req.params.category);
	var teamCategories = Teams.fetchCategories();
	res.render('partials/team/teams', {teams: teams, categories: teamCategories, currentCategory: req.params.category, replaceHistory: true});
}

exports.team = function(req, res, next){
	req.app.set('layout', 'layouts/layout');
	var team = Teams.fetchTeamById(req.params.teamId);
	res.render('partials/team', {team: team});
}

exports.contact = function(req, res, next){
	req.app.set('layout', 'layouts/layout');
	res.render('contact', {title: "Contact WCT"});
}