//Require Mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;
var EventSchema = new Schema({
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

function get_source_at(url){
	var source;
    request({ url:url,json:true}, function (error, response, body) {
        source = body;
    });
    while(source === undefined) {
      require('deasync').runLoopOnce();
    }
    return source;
}

var Event = mongoose.model('Event', EventSchema);
var request = require("request")
var featured = get_source_at("http://159.203.35.195/featured");

for(var eventIter in featured.data){
	var drawInfo = get_source_at("http://159.203.35.195/events/" + featured.data[eventIter].eventId + "/draws");
	console.log("Getting EventID: " + featured.data[eventIter].eventId);
	console.log(drawInfo);
}

