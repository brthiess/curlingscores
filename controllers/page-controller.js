var mongoose = require("mongoose");
var Event = require('../models/event');

var EventController = {};

//Home page
exports.index = function(req, res, next) {
	Event.find({}).exec(function (err, events) {
		if (err) {
			console.log("Error:", err);
		}
		else {
			res.render("index", {competitions: events});
		}
	});
	
	/*
	var competitions = Competition.fetchCurrentCompetitions();
	//Get current games for first competition in array
	var featuredCompetitionId = Object.keys(competitions)[0];
	var featuredDraw = Competition.fetchCurrentDraw(featuredCompetitionId);
	var standings = Competition.fetchStandings(featuredCompetitionId);
	
	req.app.set('layout', 'layouts/layout');
	res.render('index', {competitions: competitions, competition: featuredDraw, activeCompetitionId: featuredCompetitionId, activeDrawId: featuredDraw.drawId, standings: standings, title: "CurlingScores"});
	*/
};

