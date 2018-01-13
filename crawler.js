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
	
	var eventTemp;
	
	var eventTemp = Event.findOne({ 'eventId': featured.data[eventIter].eventId }) 
	if(eventTemp == null){
		console.log('new event!');
		eventTemp = new Event({
			eventId: featured.data[eventIter].eventId,
			endDate: featured.data[eventIter].endDate,
			startDate: featured.data[eventIter].startDate,
			displayName: featured.data[eventIter].displayName,
			division: featured.data[eventIter].division,
			location: featured.data[eventIter].location,
			draws: drawInfo
		})
	}
	else {
		console.log('old event');
	}
	
	var query = {'eventId':featured.data[eventIter].eventId};
	
	Event.findOneAndUpdate(query, eventTemp, {upsert:true}, function(err, doc){
		if (err) console.log(err);
		else{
			console.log("succesfully saved");
		}
	});
}

schedule = get_source_at("http://159.203.35.195/schedule");
console.log(schedule);
for(var eventIter in schedule){
	console.log("update event division");
	console.log(schedule[eventIter].division);
	console.log(schedule[eventIter].eventId);
	Event.update({ 'eventId': schedule[eventIter].eventId }, { $set: { division: schedule[eventIter].division }}, function(err){
		if(err) {
			console.log(err);
		}
		else {
			console.log("success update");
		}
	});
}
process.exit()
