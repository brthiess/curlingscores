//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Schema = mongoose.Schema;
var EventSchema = new Schema({
	eventId: Number,
	endDate: Date,
	startDate: Date,
	displayName: String,
	division: String,
	location:String,
	draws: [{ 
		displayName:String, 
		drawName:String, 
		startsAt: Number, 
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
			awayScore:String,
			homeScore:String,
			gameStatus:String,
			currentEnd:String,
			statusText: String
		}]
	}]
});

module.exports = mongoose.model('Event', EventSchema);