var dateFormat = require('dateformat');
var functions = require('../includes/functions.js');
var ScheduleArray = [
		{
			category: 'men',
			year: 2018,
			yearName: '2017-2018',
			events: [
				{
					name: '	Hokkaido Bank Curling Classic',
					location: '	Hokkaido, JPN',
					purse: 1700000,
					currency: 'YEN',
					startDate: 'August 3, 2017',
					endDate: 'August 6, 2017',
					champion: 'Kim, SooHyuk',
					eventId: 1
				},
				{
					name: 'Spider Performance Icebreaker at The Granite',
					location: 'Winnipeg, MB',
					purse: 7680,
					currency: 'CDN',
					startDate: 'August 25, 2017',
					endDate: 'August 27, 2017',
					champion: 'Braden Calvert',
					eventId: 2
				},
				{
					name: 'Baden Masters',
					location: 'Baden, SUI',
					purse: 330000,
					currency: 'CHF',
					startDate: 'September 1, 2017',
					endDate: 'September 3, 2017',
					champion: 'Niklas Edin',
					eventId: 3
				},
				{
					name: 'GSOC Tour Challenge Tier 1',
					location: 'Regina, SK',
					purse: 100000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Brad Gushue',
					eventId: 4
				},
				{
					name: 'Stu Sells Oakville Tankard',
					location: '	Oakville, ON',
					purse: 28000,
					currency: 'CDN',
					startDate: 'September 1, 2017',
					endDate: 'September 4, 2017',
					champion: 'Mouat, Bruce',
					eventId: 5
				},
				{
					name: 'GSOC Tour Challenge Tier 2',
					location: 'Regina, SK',
					purse: 50000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Jason Gunnlaugson',
					eventId: 6
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 14, 2017',
					endDate: 'September 17, 2017',
					champion: 'Brad Jacobs',
					eventId: 7
				},
				{
					name: 'King Cash Spiel',
					location: 'Maple Ridge, BC',
					purse: 12000,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Geall, Sean',
					eventId: 8
				},
				{
					name: 'Biosteel Oakville Fall Classic',
					location: '	Oakville, ON',
					purse: 15000,
					currency: 'CDN',
					startDate: 'September 8, 2017',
					endDate: 'September 10, 2017',
					champion: 'Bruce Mouat',
					eventId: 9
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Brad Jacobs',
					eventId: 10
				},
				{
					name: 'Mother Club Fall Curling Classic',
					location: 'Winnipeg, MB',
					purse: 10000,
					currency: 'CDN',
					startDate: 'September 21, 2017',
					endDate: 'October 24, 2017',
					champion: 'Jason Gunnlaugson',
					eventId: 11
				},
			]
		},
		{
			category: 'women',
			year: 2018,
			yearName: '2017-2018',
			events: [
				{
					name: '	Hokkaido Bank Curling Classic',
					location: '	Hokkaido, JPN',
					purse: 1700000,
					currency: 'YEN',
					startDate: 'August 3, 2017',
					endDate: 'October 6, 2017',
					champion: 'Rachel Homan',
					eventId: 12
				},
				{
					name: 'Spider Performance Icebreaker at The Granite',
					location: 'Winnipeg, MB',
					purse: 7680,
					currency: 'CDN',
					startDate: 'August 25, 2017',
					endDate: 'August 27, 2017',
					champion: 'Braden Calvert',
					eventId: 13
				},
				{
					name: 'Baden Masters',
					location: 'Baden, SUI',
					purse: 330000,
					currency: 'CHF',
					startDate: 'September 1, 2017',
					endDate: 'September 3, 2017',
					champion: 'Niklas Edin',
					eventId: 14
				},
				{
					name: 'GSOC Tour Challenge Tier 1',
					location: 'Regina, SK',
					purse: 100000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Brad Gushue',
					eventId: 15
				},
				{
					name: 'Stu Sells Oakville Tankard',
					location: '	Oakville, ON',
					purse: 28000,
					currency: 'CDN',
					startDate: 'September 1, 2017',
					endDate: 'September 4, 2017',
					champion: 'Mouat, Bruce',
					eventId: 16
				},
				{
					name: 'GSOC Tour Challenge Tier 2',
					location: 'Regina, SK',
					purse: 50000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Jason Gunnlaugson',
					eventId: 17
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 14, 2017',
					endDate: 'September 17, 2017',
					champion: 'Brad Jacobs',
					eventId: 18
				},
				{
					name: 'King Cash Spiel',
					location: 'Maple Ridge, BC',
					purse: 12000,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Geall, Sean',
					eventId: 19
				},
				{
					name: 'Biosteel Oakville Fall Classic',
					location: '	Oakville, ON',
					purse: 15000,
					currency: 'CDN',
					startDate: 'September 8, 2017',
					endDate: 'September 10, 2017',
					champion: 'Bruce Mouat',
					eventId: 20
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Brad Jacobs',
					eventId: 21
				},
				{
					name: 'Mother Club Fall Curling Classic',
					location: 'Winnipeg, MB',
					purse: 10000,
					currency: 'CDN',
					startDate: 'September 21, 2017',
					endDate: 'September 24, 2017',
					champion: 'Jason Gunnlaugson',
					eventId: 22
				},
			]
		},
		{
			category: 'men',
			year: 2017,
			yearName: '2016-2017',
			events: [
				{
					name: '	Hokkaido Bank Curling Classic',
					location: '	Hokkaido, JPN',
					purse: 1700000,
					currency: 'YEN',
					startDate: 'August 3, 2017',
					endDate: 'August 6, 2017',
					champion: 'Kim, SooHyuk',
					eventId: 23
				},
				{
					name: 'Spider Performance Icebreaker at The Granite',
					location: 'Winnipeg, MB',
					purse: 7680,
					currency: 'CDN',
					startDate: 'August 25, 2017',
					endDate: 'August 27, 2017',
					champion: 'Braden Calvert',
					eventId: 24
				},
				{
					name: 'Baden Masters',
					location: 'Baden, SUI',
					purse: 330000,
					currency: 'CHF',
					startDate: 'September 1, 2017',
					endDate: 'September 3, 2017',
					champion: 'Niklas Edin',
					eventId: 25
				},
				{
					name: 'GSOC Tour Challenge Tier 1',
					location: 'Regina, SK',
					purse: 100000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Brad Gushue',
					eventId: 26
				},
				{
					name: 'Stu Sells Oakville Tankard',
					location: '	Oakville, ON',
					purse: 28000,
					currency: 'CDN',
					startDate: 'September 1, 2017',
					endDate: 'September 4, 2017',
					champion: 'Mouat, Bruce',
					eventId: 27
				},
				{
					name: 'GSOC Tour Challenge Tier 2',
					location: 'Regina, SK',
					purse: 50000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Jason Gunnlaugson',
					eventId: 28
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 14, 2017',
					endDate: 'September 17, 2017',
					champion: 'Brad Jacobs',
					eventId: 29
				},
				{
					name: 'King Cash Spiel',
					location: 'Maple Ridge, BC',
					purse: 12000,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Geall, Sean',
					eventId: 30
				},
				{
					name: 'Biosteel Oakville Fall Classic',
					location: '	Oakville, ON',
					purse: 15000,
					currency: 'CDN',
					startDate: 'September 8, 2017',
					endDate: 'September 10, 2017',
					champion: 'Bruce Mouat',
					eventId: 31
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Brad Jacobs',
					eventId: 32
				},
				{
					name: 'Mother Club Fall Curling Classic',
					location: 'Winnipeg, MB',
					purse: 10000,
					currency: 'CDN',
					startDate: 'September 21, 2017',
					endDate: 'September 24, 2017',
					champion: 'Jason Gunnlaugson',
					eventId: 32
				},
			]
		},
		{
			category: 'men',
			year: 2016,
			yearName: '2015-2016',
			events: [
				{
					name: '	Hokkaido Bank Curling Classic',
					location: '	Hokkaido, JPN',
					purse: 1700000,
					currency: 'YEN',
					startDate: 'August 3, 2017',
					endDate: 'August 6, 2017',
					champion: 'John Morris',
					eventId: 33
				},
				{
					name: 'Spider Performance Icebreaker at The Granite',
					location: 'Winnipeg, MB',
					purse: 7680,
					currency: 'CDN',
					startDate: 'August 25, 2017',
					endDate: 'August 27, 2017',
					champion: 'Braden Calvert',
					eventId: 34
				},
				{
					name: 'Baden Masters',
					location: 'Baden, SUI',
					purse: 330000,
					currency: 'CHF',
					startDate: 'September 1, 2017',
					endDate: 'September 3, 2017',
					champion: 'Niklas Edin',
					eventId: 35
				},
				{
					name: 'GSOC Tour Challenge Tier 1',
					location: 'Regina, SK',
					purse: 100000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Brad Gushue',
					eventId: 36
				},
				{
					name: 'Stu Sells Oakville Tankard',
					location: '	Oakville, ON',
					purse: 28000,
					currency: 'CDN',
					startDate: 'September 1, 2017',
					endDate: 'September 4, 2017',
					champion: 'Mouat, Bruce',
					eventId: 37
				},
				{
					name: 'GSOC Tour Challenge Tier 2',
					location: 'Regina, SK',
					purse: 50000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Jason Gunnlaugson',
					eventId: 38
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 14, 2017',
					endDate: 'September 17, 2017',
					champion: 'Brad Jacobs',
					eventId: 39
				},
				{
					name: 'King Cash Spiel',
					location: 'Maple Ridge, BC',
					purse: 12000,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Geall, Sean',
					eventId: 40
				},
				{
					name: 'Biosteel Oakville Fall Classic',
					location: '	Oakville, ON',
					purse: 15000,
					currency: 'CDN',
					startDate: 'September 8, 2017',
					endDate: 'September 10, 2017',
					champion: 'Bruce Mouat',
					eventId: 41
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Brad Jacobs',
					eventId: 42
				},
				{
					name: 'Mother Club Fall Curling Classic',
					location: 'Winnipeg, MB',
					purse: 10000,
					currency: 'CDN',
					startDate: 'September 21, 2017',
					endDate: 'September 24, 2017',
					champion: 'Jason Gunnlaugson',
					eventId: 43
				},
			]
		},
		{
			category: 'women',
			year: 2017,
			yearName: '2017-2018',
			events: [
				{
					name: '	Hokkaido Bank Curling Classic',
					location: '	Hokkaido, JPN',
					purse: 1700000,
					currency: 'YEN',
					startDate: 'August 3, 2017',
					endDate: 'October 6, 2017',
					champion: 'Rachel Homan',
					eventId: 12
				},
				{
					name: 'Spider Performance Icebreaker at The Granite',
					location: 'Winnipeg, MB',
					purse: 7680,
					currency: 'CDN',
					startDate: 'August 25, 2017',
					endDate: 'August 27, 2017',
					champion: 'Jennifer Jones',
					eventId: 13
				},
				{
					name: 'Baden Masters',
					location: 'Baden, SUI',
					purse: 330000,
					currency: 'CHF',
					startDate: 'September 1, 2017',
					endDate: 'September 3, 2017',
					champion: 'Val Sweeting',
					eventId: 14
				},
				{
					name: 'GSOC Tour Challenge Tier 1',
					location: 'Regina, SK',
					purse: 100000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Brad Gushue',
					eventId: 15
				},
				{
					name: 'Stu Sells Oakville Tankard',
					location: '	Oakville, ON',
					purse: 28000,
					currency: 'CDN',
					startDate: 'September 1, 2017',
					endDate: 'September 4, 2017',
					champion: 'Mouat, Bruce',
					eventId: 16
				},
				{
					name: 'GSOC Tour Challenge Tier 2',
					location: 'Regina, SK',
					purse: 50000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Jason Gunnlaugson',
					eventId: 17
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 14, 2017',
					endDate: 'September 17, 2017',
					champion: 'Brad Jacobs',
					eventId: 18
				},
				{
					name: 'King Cash Spiel',
					location: 'Maple Ridge, BC',
					purse: 12000,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Geall, Sean',
					eventId: 19
				},
				{
					name: 'Biosteel Oakville Fall Classic',
					location: '	Oakville, ON',
					purse: 15000,
					currency: 'CDN',
					startDate: 'September 8, 2017',
					endDate: 'September 10, 2017',
					champion: 'Bruce Mouat',
					eventId: 20
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Brad Jacobs',
					eventId: 21
				},
				{
					name: 'Mother Club Fall Curling Classic',
					location: 'Winnipeg, MB',
					purse: 10000,
					currency: 'CDN',
					startDate: 'September 21, 2017',
					endDate: 'September 24, 2017',
					champion: 'Jason Gunnlaugson',
					eventId: 22
				},
			]
		},
		{
			category: 'women',
			year: 2016,
			yearName: '2017-2018',
			events: [
				{
					name: '	Hokkaido Bank Curling Classic',
					location: '	Hokkaido, JPN',
					purse: 1700000,
					currency: 'YEN',
					startDate: 'August 3, 2017',
					endDate: 'October 6, 2017',
					champion: 'Rachel Homan',
					eventId: 12
				},
				{
					name: 'Spider Performance Icebreaker at The Granite',
					location: 'Winnipeg, MB',
					purse: 7680,
					currency: 'CDN',
					startDate: 'August 25, 2017',
					endDate: 'August 27, 2017',
					champion: 'Jennifer Jones',
					eventId: 13
				},
				{
					name: 'Baden Masters',
					location: 'Baden, SUI',
					purse: 330000,
					currency: 'CHF',
					startDate: 'September 1, 2017',
					endDate: 'September 3, 2017',
					champion: 'Val Sweeting',
					eventId: 14
				},
				{
					name: 'GSOC Tour Challenge Tier 1',
					location: 'Regina, SK',
					purse: 100000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Brad Gushue',
					eventId: 15
				},
				{
					name: 'Stu Sells Oakville Tankard',
					location: '	Oakville, ON',
					purse: 28000,
					currency: 'CDN',
					startDate: 'September 1, 2017',
					endDate: 'September 4, 2017',
					champion: 'Mouat, Bruce',
					eventId: 16
				},
				{
					name: 'GSOC Tour Challenge Tier 2',
					location: 'Regina, SK',
					purse: 50000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Jason Gunnlaugson',
					eventId: 17
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 14, 2017',
					endDate: 'September 17, 2017',
					champion: 'Brad Jacobs',
					eventId: 18
				},
				{
					name: 'King Cash Spiel',
					location: 'Maple Ridge, BC',
					purse: 12000,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Geall, Sean',
					eventId: 19
				},
				{
					name: 'Biosteel Oakville Fall Classic',
					location: '	Oakville, ON',
					purse: 15000,
					currency: 'CDN',
					startDate: 'September 8, 2017',
					endDate: 'September 10, 2017',
					champion: 'Bruce Mouat',
					eventId: 20
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Brad Jacobs',
					eventId: 21
				},
				{
					name: 'Mother Club Fall Curling Classic',
					location: 'Winnipeg, MB',
					purse: 10000,
					currency: 'CDN',
					startDate: 'September 21, 2017',
					endDate: 'September 24, 2017',
					champion: 'Jason Gunnlaugson',
					eventId: 22
				},
			]
		}
	]
	
	
ScheduleCategories = {
	years: [
			{year: 2014, name: '2013-2014'},
			{year: 2015, name: '2014-2015'},
			{year: 2016, name: '2015-2016'},
			{year: 2017, name: '2016-2017'},
			{year: 2018, name: '2017-2018'},
			],
	categories: ['men', 'women']
}
	
	


/*
End Fake Objects		
*/
var Schedule = function(){}
Schedule.prototype.data = {};

Schedule.fetchSchedule = function(category, year){
	var cloneScheduleArray = JSON.parse(JSON.stringify(ScheduleArray.slice(0)));
	//TODO: Make sure this is more robust when checking for [0]
	var newScheduleArray = cloneScheduleArray.filter(function(el) {
		return el.category == category && el.year == year;
	})[0];
	
	newScheduleArray.events.sort(function(a, b){
		return (new Date(a.startDate)) - (new Date(b.startDate));
	});
	
	return newScheduleArray;
}

Schedule.fetchCategories = function(){
	ScheduleCategories.years.sort(function(a,b) {
		return a.year - b.year;
	}).reverse();
	return ScheduleCategories;
}

Schedule.convertEventDatesToSimple = function(events) {
	for(var event in events) {
		events[event].startDate = dateFormat(new Date(events[event].startDate), "mmm d");
		if (functions.isSameMonth(events[event].startDate, events[event].endDate)) { 
			events[event].endDate = dateFormat(new Date(events[event].endDate), "d")
		}
		else {
			events[event].endDate = dateFormat(new Date(events[event].endDate), "mmm d")
		}
	}
	return events;
}

module.exports = Schedule;