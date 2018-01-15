//Require Mongoose
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:gH2366bt@ds249787.mlab.com:49787/curling')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
  

console.log('connected');

//Define a schema
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
	for(var draw in drawInfo){
		drawInfo[draw].drawId = Buffer.from(drawInfo[draw].drawName).toString('base64');
	}

	
	var update = {	eventId: featured.data[eventIter].eventId,
					endDate: featured.data[eventIter].endDate,
					startDate: featured.data[eventIter].startDate,
					displayName: featured.data[eventIter].displayName,
					location: featured.data[eventIter].location,
					draws: drawInfo
	}
	var query = {'eventId':featured.data[eventIter].eventId};
	
	Event.findOneAndUpdate(query, update, {upsert:true}, function(err, event){
		if (err) console.log(err);
		else{
			console.log("\n/*********Updated Event ******/");
			console.log(event);
		}
	});
}

schedule = get_source_at("http://159.203.35.195/schedule");

for(var eventIter in schedule){
	Event.update({ 'eventId': schedule[eventIter].eventId }, { $set: { "division": schedule[eventIter].division }}, function(err, doc){
		if(err) {
			console.log(err);
		}
		else {
			
		}
	});
}

