//Require Mongoose
var mongoose = require('mongoose');
var request = require("request");
var functions = require("../includes/functions");

/*******************
Schema Definition
*******************/
var Schema = mongoose.Schema;

var Schema = mongoose.Schema;
var EventSchema = new Schema({
	eventId: Number,
	endDate: Date,
	startDate: Date,
	displayName: String,
	division: String,
	location:String,
	lastUpdated: Date,
	draws: [{ 
		displayName:String, 
		drawName:String, 
		startsAt: Number, 
		drawId: String,
		games: [{
			gameId:Number,
			awayTeamId:Number,
			homeTeamId:Number,
			awayTeamDisplayName:String,
			awayTeamShortName:String,
			awayHammer:Boolean,
			homeHammer:Boolean,
			homeTeamDisplayName:String,
			homeTeamShortName:String,
			awayTotal:String,
			homeTotal:String,
			gameStatus:String,
			currentEnd:String,
			statusText: String,
			awayScores: [],
			homeScores: []
		}]
	}]
});
/*********************
End Schema Definition
*********************/


/*********************
Model Methods
*********************/

var Event = function(){}
Event.prototype.data = {};

var _event = mongoose.model('Event', EventSchema);


Event.fetchCurrentDrawByEventId = function(eventId, callback){
	_event.findOne({'eventId' : eventId}).exec(function (err, event) {
		if (err) {
			console.log("Error:", err);
			callback(null)
		}
		else {
			fiveMinutesAgo = new Date((new Date()).getMinutes() - 5);
			if(event.lastUpdated == null || event.lastUpdated < fiveMinutesAgo  ){
				console.log("Updating EventID: " + eventId);
				Event.updateEventDraws(eventId);
			}
			//Get closest draw to current time
			currentTime = new Date();
			var minTime = Number.MAX_SAFE_INTEGER;
			currentDrawId = event.draws[0].drawId;
			currentGames = [];
			var currentDrawTime = new Date();
			for(var i = 0; i < event.draws.length; i++){
				drawTime = new Date(event.draws[i].startsAt * 1000);
				if  (drawTime.getTime() <= currentTime.getTime() && (currentTime.getTime() - drawTime.getTime()) < minTime) {
					minTime = currentTime.getTime() - drawTime.getTime();
					currentDrawId = event.draws[i].drawId;
					currentDrawTime = new Date(event.draws[i].startsAt * 1000);
					currentGames = event.draws[i].games;
				}
			}
			event.currentDrawTime = currentDrawTime;
			event.currentGames = currentGames;
			event.currentDrawId = currentDrawId;
			callback(event);
		}
	});
}

Event.getCurrentDraw = function(draws){
	//Get closest draw to current time
	var currentTime = new Date();
	var minTime = Number.MAX_SAFE_INTEGER;
	var currentDraw = [];
	if(draws != null && draws.length > 0){
		currentDraw = draws[0];
	}

	for(var i = 0; i < draws.length; i++){
		var drawTime = new Date(draws[i].startsAt * 1000);
		if  (drawTime.getTime() <= currentTime.getTime() && (currentTime.getTime() - drawTime.getTime()) < minTime) {
			minTime = currentTime.getTime() - drawTime.getTime();
			currentDraw = draws[i];
			currentDraw.drawId = Event.getDrawIdFromDrawName(currentDraw.drawName);
		}
	}
	return currentDraw;
}

Event.updateEventDraws = function(eventId) {
	var draws = Event.fetchEventDrawsById(eventId); //Fetches from 159...  Returns list of draws.
	var currentDraw = Event.getCurrentDraw(draws); //Gets the current draw.  No DB calls.
	games = Event.fetchGamesByDraw(currentDraw); //Fetches games from 159...
	currentDraw.games = games;
	console.log("****Current Draw****");
	console.log(currentDraw);
	Event.updateDrawById(eventId, currentDraw);
}


Event.fetchGamesByDraw = function(draw){
	var currentGames = [];
	for(var i = 0; i < draw.games.length; i++){
		game = Event.fetchGameById(draw.games[i].gameId);
		currentGames.push(game);
	}
	return currentGames;
}

Event.fetchDrawScoresByDrawId = function(eventId, drawId, callback){
	_event.findOne({'eventId' : eventId}).exec(function (err, event) {
		if (err) {
			console.log("Error:", err);
			callback(null)
		}
		if(event != null){
			var drawScores = event.draws.filter(function(draw){
				return draw.drawId == drawId;
			});
			callback(drawScores);
		}
		callback(null);
	});
}

Event.fetchAllCurrentEvents = function(callback){
	todaysDate = new Date();
	yesterdaysDate = todaysDate.setDate(todaysDate.getDate() - 2);
	tomorrowsDate = todaysDate.setDate(todaysDate.getDate() + 2);
	_event.find({"startDate": {"$lt": tomorrowsDate}, "endDate" : {"$gte" : yesterdaysDate}}).exec(function (err, events) {
		if (err) {
			console.log("Error:", err);
			callback(null)
		}
		else {
			callback(events);
		}
	});
}

//Updates
Event.updateDrawById = function(eventId, draw){
	console.log("****Updating DrawID: " + draw.drawId);
	_event.update({'eventId' : eventId, 'draws.drawId': draw.drawId}, {'$set': {
		"draws.$.displayName" : draw.displayName,
		"draws.$.drawName" : draw.drawName,
		"draws.$.startsAt" : draw.startsAt,
		"draws.$.drawId" : draw.drawId,
		"draws.$.games" : draw.games
	}}, function(err, doc) {
		if(err) {
			console.log(err);
		}
	});
}

//External Fetches
Event.fetchEventDrawsById = function(eventId){
	url = "http://159.203.35.195/events/" + eventId + "/draws/";
	return functions.getSourceAt(url);
}


Event.fetchGameById = function(gameId){
	url = "http://159.203.35.195/games/" + gameId + "/linescore";
	return functions.getSourceAt(url);
}


//Misc 
Event.getDrawIdFromDrawName = function(drawName){
	return Buffer.from(drawName).toString('base64');
}



module.exports = Event;