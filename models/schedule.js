var dateFormat = require('dateformat');
var functions = require('../includes/functions.js');
var Team = require('../models/team.js');

var DefaultImage = "default-event.jpg";
var DefaultChampions = [
	{name: 'Colton Flasch', location: 'Saskatoon, SK', year: 2017},
		{year: 2016	, name: 'Brad Jacobs	', location: 'Sault Ste Marie, NONT'},
		{year: 2015	, name: 'Mike McEwen	', location: 'Winnipeg, MB'},
		{year: 2014	, name: 'Mike McEwen	', location: 'Winnipeg, MB'},
		{year: 2013	, name: 'Jeff Stoughton	', location: 'Winnipeg, MB'},
		{year: 2012	, name: 'John Epping	', location: 'Toronto, ON'},
		{year: 2011	, name: 'Mike McEwen	', location: 'Winnipeg, MB'},
		{year: 2010	, name: 'Dave Elias	', location: 'Winnipeg, MB'},
		{year: 2009	, name: 'Brad Heidt	', location: 'Kindersley, SK'},
		{year: 2008	, name: 'Eugene Hritzuk	', location: 'Saskatoon, SK'},
		{year: 2007	, name: 'Randy Woytowich	', location: 'Saskatoon, SK'},
		{year: 2006	, name: 'Brian Humble	', location: 'Saskatoon, SK'},
		{year: 2005	, name: 'Glen Despins	', location: 'Regina, SK'},
		{year: 2004	, name: 'Randy Ferbey	', location: 'Edmonton, AB'},
		{year: 2003	, name: 'Scott Coghlan	', location: 'Saskatoon, SK'},
		{year: 2002	, name: 'Kevin Koe	', location: 'Calgary, AB'},
		{year: 2001	, name: 'Bruce Korte	', location: 'Saskatoon, SK'},
		{year: 2000	, name: 'Kevin Park	', location: 'Edmonton, AB'},
		{year: 1999	, name: 'Glen Despins	', location: 'Regina, SK'},
		{year: 1998	, name: 'Doug Harcourt	', location: 'Quill Lake, SK'},
		{year: 1997	, name: 'Doug Harcourt	', location: 'Quill Lake, SK'},
		{year: 1996	, name: 'Wayne Middaugh	', location: 'Toronto, ON'},
		{year: 1995	, name: 'Brad Heidt	', location: 'Kerrobert, SK'},
		{year: 1994	, name: 'Murray McEachern	', location: 'Kronau, SK'},
		{year: 1993	, name: 'Mickey Pendergast	', location: 'Calgary, AB'},
		{year: 1992	, name: 'Al Hackner	', location: 'Thunder Bay, ON'},
		{year: 1979	, name: 'Paul Gowsell	', location: 'Calgary, AB'},
		{year: 1978	, name: 'Paul Gowsell	', location: 'Calgary, AB'},
		{year: 1977	, name: 'Paul Gowsell	', location: 'Calgary, AB'}
]
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
					eventId: 1,
					format: 'Triple Knockout',
					numTeams: 24,
				},
				{
					name: 'Spider Performance Icebreaker at The Granite',
					location: 'Winnipeg, MB',
					purse: 7680,
					currency: 'CDN',
					startDate: 'August 25, 2017',
					endDate: 'August 27, 2017',
					champion: 'Braden Calvert',
					format: 'Triple Knockout',
					numTeams: 24,
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
					format: 'Triple Knockout',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 16,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
					eventId: 11
				},
				
				{
					name: 'College Clean Restoration Classic',
					location: 'Saskatoon, SK',
					purse: 33000,
					currency: 'CDN',
					startDate: 'September 29, 2017',
					endDate: 'October 2, 2017',
					champion: 'Colton Flasch',
					format: 'Triple Knockout',
					numTeams: 24,
					eventId: 12,
					image: 'flasch.jpg'
						
				}
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
					format: 'Round Robin',
					numTeams: 24,
					eventId: 44
				},
				{
					name: 'Spider Performance Icebreaker at The Granite',
					location: 'Winnipeg, MB',
					purse: 7680,
					currency: 'CDN',
					startDate: 'August 25, 2017',
					endDate: 'August 27, 2017',
					champion: 'Braden Calvert',
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
					eventId: 33
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
					format: 'Round Robin',
					numTeams: 24,
					eventId: 45
				},
				{
					name: 'Spider Performance Icebreaker at The Granite',
					location: 'Winnipeg, MB',
					purse: 7680,
					currency: 'CDN',
					startDate: 'August 25, 2017',
					endDate: 'August 27, 2017',
					champion: 'Braden Calvert',
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
					eventId: 55
				},
				{
					name: 'Spider Performance Icebreaker at The Granite',
					location: 'Winnipeg, MB',
					purse: 7680,
					currency: 'CDN',
					startDate: 'August 25, 2017',
					endDate: 'August 27, 2017',
					champion: 'Jennifer Jones',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 56
				},
				{
					name: 'Baden Masters',
					location: 'Baden, SUI',
					purse: 330000,
					currency: 'CHF',
					startDate: 'September 1, 2017',
					endDate: 'September 3, 2017',
					champion: 'Val Sweeting',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 57
				},
				{
					name: 'GSOC Tour Challenge Tier 1',
					location: 'Regina, SK',
					purse: 100000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Brad Gushue',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 58
				},
				{
					name: 'Stu Sells Oakville Tankard',
					location: '	Oakville, ON',
					purse: 28000,
					currency: 'CDN',
					startDate: 'September 1, 2017',
					endDate: 'September 4, 2017',
					champion: 'Mouat, Bruce',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 59
				},
				{
					name: 'GSOC Tour Challenge Tier 2',
					location: 'Regina, SK',
					purse: 50000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Jason Gunnlaugson',
					format: 'Round Robin',
					numTeams: 24,
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
					format: 'Round Robin',
					numTeams: 24,
					eventId: 60
				},
				{
					name: 'King Cash Spiel',
					location: 'Maple Ridge, BC',
					purse: 12000,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Geall, Sean',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 61
				},
				{
					name: 'Biosteel Oakville Fall Classic',
					location: '	Oakville, ON',
					purse: 15000,
					currency: 'CDN',
					startDate: 'September 8, 2017',
					endDate: 'September 10, 2017',
					champion: 'Bruce Mouat',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 62
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Brad Jacobs',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 63
				},
				{
					name: 'Mother Club Fall Curling Classic',
					location: 'Winnipeg, MB',
					purse: 10000,
					currency: 'CDN',
					startDate: 'September 21, 2017',
					endDate: 'September 24, 2017',
					champion: 'Jason Gunnlaugson',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 64
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
					format: 'Round Robin',
					numTeams: 24,
					eventId: 66
				},
				{
					name: 'Spider Performance Icebreaker at The Granite',
					location: 'Winnipeg, MB',
					purse: 7680,
					currency: 'CDN',
					startDate: 'August 25, 2017',
					endDate: 'August 27, 2017',
					champion: 'Jennifer Jones',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 67
				},
				{
					name: 'Baden Masters',
					location: 'Baden, SUI',
					purse: 330000,
					currency: 'CHF',
					startDate: 'September 1, 2017',
					endDate: 'September 3, 2017',
					champion: 'Val Sweeting',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 68
				},
				{
					name: 'GSOC Tour Challenge Tier 1',
					location: 'Regina, SK',
					purse: 100000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Brad Gushue',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 69
				},
				{
					name: 'Stu Sells Oakville Tankard',
					location: '	Oakville, ON',
					purse: 28000,
					currency: 'CDN',
					startDate: 'September 1, 2017',
					endDate: 'September 4, 2017',
					champion: 'Mouat, Bruce',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 70
				},
				{
					name: 'GSOC Tour Challenge Tier 2',
					location: 'Regina, SK',
					purse: 50000,
					currency: 'CDN',
					startDate: 'September 5, 2017',
					endDate: 'September 10, 2017',
					champion: 'Jason Gunnlaugson',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 71
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 14, 2017',
					endDate: 'September 17, 2017',
					champion: 'Brad Jacobs',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 73
				},
				{
					name: 'King Cash Spiel',
					location: 'Maple Ridge, BC',
					purse: 12000,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Geall, Sean',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 74
				},
				{
					name: 'Biosteel Oakville Fall Classic',
					location: '	Oakville, ON',
					purse: 15000,
					currency: 'CDN',
					startDate: 'September 8, 2017',
					endDate: 'September 10, 2017',
					champion: 'Bruce Mouat',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 75
				},
				{
					name: 'AMJ Campbell Shorty Jenkins Classic',
					location: 'Cornwall, ON',
					purse: 60200,
					currency: 'CDN',
					startDate: 'September 15, 2017',
					endDate: 'September 18, 2017',
					champion: 'Brad Jacobs',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 76
				},
				{
					name: 'Mother Club Fall Curling Classic',
					location: 'Winnipeg, MB',
					purse: 10000,
					currency: 'CDN',
					startDate: 'September 21, 2017',
					endDate: 'September 24, 2017',
					champion: 'Jason Gunnlaugson',
					format: 'Round Robin',
					numTeams: 24,
					eventId: 77
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

Schedule.fetchEvent = function(eventId){
	for(var s in ScheduleArray){
		if (ScheduleArray[s].events != null){
			var currentCategory = ScheduleArray[s].category;
			for(var i = 0; i < ScheduleArray[s].events.length; i++){
				if(ScheduleArray[s].events[i].eventId == eventId){
					if (ScheduleArray[s].events[i].image == null){
						ScheduleArray[s].events[i].image = DefaultImage;
					}
					ScheduleArray[s].events[i].teams = Team.fetchRandomTeams(ScheduleArray[s].numTeams, currentCategory);
					ScheduleArray[s].events[i].category = currentCategory;
					ScheduleArray[s].events[i].dateString = Schedule.getDateString(ScheduleArray[s].events[i].startDate, ScheduleArray[s].events[i].endDate);
					ScheduleArray[s].events[i].champions = DefaultChampions;
					return ScheduleArray[s].events[i];
				}
			}
		}
	}
	return false;
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

Schedule.getDateString = function(startDate, endDate){
	startDate = dateFormat(new Date(startDate), "mmm d");
	if (functions.isSameMonth(startDate, endDate)) { 
		endDate = dateFormat(new Date(endDate), "d, yyyy")
	}
	else {
		endDate = dateFormat(new Date(endDate), "mmm d, yyyy")
	}
	return startDate + " - " + endDate;
}

module.exports = Schedule;