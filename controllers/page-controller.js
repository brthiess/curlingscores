var Competition = require('../models/competition.js');
var Social = require('../models/social.js');
var Rankings = require('../models/rankings.js');
var Schedule = require('../models/schedule.js');
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
	res.render('index', {competitions: competitions, competition: featuredDraw, activeCompetitionId: featuredCompetitionId, activeDrawId: featuredDraw.drawId, standings: standings, rankings: rankings, categories: rankingsCategories, title: "World Curling Tour", posts: socialMedia});
};

exports.schedule = function(req, res, next){
	req.app.set('layout', 'layouts/layout');
	var schedule = Schedule.fetchSchedule('men', 2018);
	var scheduleCategories = Schedule.fetchCategories();
	res.render('schedule', {schedule: schedule, categories: scheduleCategories, title: "Schedule"});
}