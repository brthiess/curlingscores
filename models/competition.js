
function createData() {
	AllCompetitionArray = {
		1: { 
				id: 1,
				type: "bracket",
				name: "Hokkaido Bank Curling Classic", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 5, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			}, 
			2: { 
				id: 2,
				name: "Spider Performance Icebreaker at The Granite", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						21: {team1: 'Shannon Kleibrink', team2: 'Rachel Homan', score1: (Math.floor(Math.random() * 6) + 1), score2: 4,	 end: '3', over:false, team1CurrentHammer: false},
						22: {team1: 'John Epping', team2: 'Jennifer Jones', score1: 1, score2: 2,	 end: '5', team1CurrentHammer: false},
						23: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 1,	 end: '4', team1CurrentHammer: false},
						24: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '3', team1CurrentHammer: false},
						25: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', team1CurrentHammer: false},
						26: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '8', over: true, team1CurrentHammer: false},
						27: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '3', team1CurrentHammer: false} 
						}
					}
				}
			}, 
			3: { 
				id: 3,
				name: "Baden Masters", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						31: {team1: 'Shannon Kleibrink', team2: 'Rachel Homan', score1: (Math.floor(Math.random() * 6) + 1), score2: 2,	 end: '5', team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						32: {team1: 'John Epping', team2: 'Jennifer Jones', score1: 1, score2: 3,	 end: '5', team1CurrentHammer: false},
						33: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', team1CurrentHammer: false},
						34: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 1,	 end: '6', team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						35: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 1,	 end: '5', team1CurrentHammer: true},
						36: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 1,	 end: '5', team1CurrentHammer: true},
						37: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', team1CurrentHammer: false}
						}
					}
				}
			}, 
			4: { 
				id: 4,
				name: "GSOC Tour Challenge Tier 1", category : "Men's", icon : "4-man-team.png", location: 'Edmonton, AB', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:30:00 GMT-0600"), 
						games: {
						41: {team1: 'Shannon Kleibrink', team2: 'Rachel Homan', score1: (Math.floor(Math.random() * 6) + 1), score2: 4,	 end: '5', team1CurrentHammer: false},
						42: {team1: 'John Epping', team2: 'Jennifer Jones', score1: 1, score2: 2,	 end: '5', team1CurrentHammer: false},
						43: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 1,	 end: '4', team1CurrentHammer: false},
						44: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', team1CurrentHammer: false},
						45: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', team1CurrentHammer: false},
						46: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', team1CurrentHammer: false},
						47: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', team1CurrentHammer: true}
						}
					}
				}
			}, 
			99: { 
				id: 99,
				name: "Service Expert's Mixed Doubles Classic",  category : "Mixed Double's", icon : "2-man-team.png", location: 'Sherwood Park, AB', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:30:00 GMT-0600"), 
						games: {
						51: {team1: 'Thiessen/Thiessen', team2: 'Sweeting/Gushue', score1: (Math.floor(Math.random() * 6) + 1), score2: 4,	 end: '5', team1CurrentHammer: false},
						52: {team1: 'Jones/Laing', team2: 'Fry/Miskew', score1: 1, score2: 2,	 end: '5', team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						53: {team1: 'Thomas/Park', team2: 'Ferguson/Ferguson', score1: 7, score2: 1,	 end: '4', team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						54: {team1: 'Bottcher/Sauder', team2: 'Ferguson/Ferguson', score1: 7, score2: 1,	 end: '4', team1CurrentHammer: false}
						}
					}
				}
			},
			5: { 
				id: 5,
				type: "bracket",
				name: "Stu Sells Oakville Tankard", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			},
			6: { 
				id: 6,
				type: "bracket",
				name: "GSOC Tour Challenge Tier 2", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			},
			7: { 
				id: 7,
				type: "bracket",
				name: "AMJ Campbell Shorty Jenkins Classic", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			},
			8: { 
				id: 8,
				type: "bracket",
				name: "King Cash Spiel", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			},
			9: { 
				id: 9,
				type: "bracket",
				name: "Biosteel Oakville Fall Classic", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			},
			10: { 
				id: 10,
				type: "bracket",
				name: "AMJ Campbell Shorty Jenkins Classic", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			},
			11: { 
				id: 11,
				type: "bracket",
				name: "Mother Club Fall Curling Classic", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			},
			12: { 
				id: 12,
				type: "bracket",
				name: "College Clean Restoration Classic", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			},
			44: { 
				id: 44,
				type: "bracket",
				name: "Hokkaido Bank Curling Classic", category : "Women's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			},
			13: { 
				id: 13,
				type: "bracket",
				name: "Spider Performance Icebreaker at The Granite", category : "Women's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			},
			46: { 
				id: 46,
				name: "HDF Shootout", category : "Women's", icon : "4-man-team.png", location: 'Edmonton, AB', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:30:00 GMT-0600"), 
						games: {
						41: {team1: 'Shannon Kleibrink', team2: 'Rachel Homan', score1: (Math.floor(Math.random() * 6) + 1), score2: 4,	 end: '5', team1CurrentHammer: false},
						42: {team1: 'John Epping', team2: 'Jennifer Jones', score1: 1, score2: 2,	 end: '5', team1CurrentHammer: false},
						43: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 1,	 end: '4', team1CurrentHammer: false},
						44: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', team1CurrentHammer: false},
						45: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', team1CurrentHammer: false},
						46: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', team1CurrentHammer: false},
						47: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', team1CurrentHammer: true}
						}
					}
				}
			}, 
			26: { 
				id: 26,
				name: "Tour Challenge", category : "Women's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						21: {team1: 'Shannon Kleibrink', team2: 'Rachel Homan', score1: (Math.floor(Math.random() * 6) + 1), score2: 4,	 end: '3', over:false, team1CurrentHammer: false},
						22: {team1: 'John Epping', team2: 'Jennifer Jones', score1: 1, score2: 2,	 end: '5', team1CurrentHammer: false},
						23: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 1,	 end: '4', team1CurrentHammer: false},
						24: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '3', team1CurrentHammer: false},
						25: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', team1CurrentHammer: false},
						26: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '8', over: true, team1CurrentHammer: false},
						27: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '3', team1CurrentHammer: false} 
						}
					}
				}
			},
			36: { 
				id: 36,
				name: "HDF Shootout", category : "Women's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						31: {team1: 'Shannon Kleibrink', team2: 'Rachel Homan', score1: (Math.floor(Math.random() * 6) + 1), score2: 2,	 end: '5', team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						32: {team1: 'John Epping', team2: 'Jennifer Jones', score1: 1, score2: 3,	 end: '5', team1CurrentHammer: false},
						33: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', team1CurrentHammer: false},
						34: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 1,	 end: '6', team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						35: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 1,	 end: '5', team1CurrentHammer: true},
						36: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 1,	 end: '5', team1CurrentHammer: true},
						37: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', team1CurrentHammer: false}
						}
					}
				}
			},
			49: { 
				id: 49,
				type: "bracket",
				name: "Tour Challenge", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			}
	};
	CompetitionArray = {
			49: { 
				id: 49,
				type: "bracket",
				name: "Tour Challenge", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0),	 end: '5', over: true},
						2: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						7: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false, team1CurrentHammer: false}
						}
					},
					2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
						games: {
						11: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 8,	 end: '5', over: true, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						12: {team1: 'John Epping', team2: 'Jason Gunnlaugson', score1: 9, score2: 2,	 end: '8', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						13: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false, team1CurrentHammer: true},
						14: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false, team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						15: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false, team1CurrentHammer: (parseInt((new Date()).getTime()) % 2 == 0)},
						16: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false, team1CurrentHammer: true},
						17: {team1: 'Pat Simmons', team2: 'Steffen Walstad', score1: 2, score2: 3,	 end: '7', over: true, team1CurrentHammer: true}
						}
					}
				}
			}, 
			26: { 
				id: 26,
				name: "Tour Challenge", category : "Women's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						21: {team1: 'Shannon Kleibrink', team2: 'Rachel Homan', score1: (Math.floor(Math.random() * 6) + 1), score2: 4,	 end: '3', over:false, team1CurrentHammer: false},
						22: {team1: 'John Epping', team2: 'Jennifer Jones', score1: 1, score2: 2,	 end: '5', team1CurrentHammer: false},
						23: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 1,	 end: '4', team1CurrentHammer: false},
						24: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '3', team1CurrentHammer: false},
						25: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', team1CurrentHammer: false},
						26: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '8', over: true, team1CurrentHammer: false},
						27: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '3', team1CurrentHammer: false} 
						}
					}
				}
			}, 
			36: { 
				id: 36,
				name: "HDF Shootout", category : "Women's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
						games: {
						31: {team1: 'Shannon Kleibrink', team2: 'Rachel Homan', score1: (Math.floor(Math.random() * 6) + 1), score2: 2,	 end: '5', team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						32: {team1: 'John Epping', team2: 'Jennifer Jones', score1: 1, score2: 3,	 end: '5', team1CurrentHammer: false},
						33: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', team1CurrentHammer: false},
						34: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 1,	 end: '6', team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						35: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 1,	 end: '5', team1CurrentHammer: true},
						36: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 1,	 end: '5', team1CurrentHammer: true},
						37: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', team1CurrentHammer: false}
						}
					}
				}
			}, 
			46: { 
				id: 46,
				name: "HDF Shootout", category : "Women's", icon : "4-man-team.png", location: 'Edmonton, AB', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:30:00 GMT-0600"), 
						games: {
						41: {team1: 'Shannon Kleibrink', team2: 'Rachel Homan', score1: (Math.floor(Math.random() * 6) + 1), score2: 4,	 end: '5', team1CurrentHammer: false},
						42: {team1: 'John Epping', team2: 'Jennifer Jones', score1: 1, score2: 2,	 end: '5', team1CurrentHammer: false},
						43: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 1,	 end: '4', team1CurrentHammer: false},
						44: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', team1CurrentHammer: false},
						45: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', team1CurrentHammer: false},
						46: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', team1CurrentHammer: false},
						47: {team1: 'Glenn Howard', team2: 'Steffen Walstad', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', team1CurrentHammer: true}
						}
					}
				}
			}, 
			99: { 
				id: 99,
				name: "Service Expert's Mixed Doubles Classic",  category : "Mixed Double's", icon : "2-man-team.png", location: 'Sherwood Park, AB', id: 1,
				draws: {
					1: {time: new Date("Sun Sep 24 2017 14:30:00 GMT-0600"), 
						games: {
						51: {team1: 'Thiessen/Thiessen', team2: 'Sweeting/Gushue', score1: (Math.floor(Math.random() * 6) + 1), score2: 4,	 end: '5', team1CurrentHammer: false},
						52: {team1: 'Jones/Laing', team2: 'Fry/Miskew', score1: 1, score2: 2,	 end: '5', team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						53: {team1: 'Thomas/Park', team2: 'Ferguson/Ferguson', score1: 7, score2: 1,	 end: '4', team1CurrentHammer: ((new Date()).getTime() % 2 == 0)},
						54: {team1: 'Bottcher/Sauder', team2: 'Ferguson/Ferguson', score1: 7, score2: 1,	 end: '4', team1CurrentHammer: false}
						}
					}
				}
			}
		}
		
	StandingsArray = {
		49: {
			pools : {
				1: {
					name : 'A',
					teams :  {
						1: {
							name: 'Bottcher', flag: 'alberta', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Mcewen', flag: 'manitoba', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Jacobs', flag: 'ontario', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Epping', flag: 'ontario', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.6, hammer: '0-1', steal: '3-1'
						}
					}
				},
				2: {
					name : 'B',
					teams :  {
						1: {
							name: 'Carruthers', flag: 'manitoba', gamesPlayed: 5, wins: 4, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Gushue', flag: 'newfoundland', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Edin', flag: 'sweden', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Laycock', flag: 'saskatchewan', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				},
				3: {
					name : 'C',
					teams :  {
						1: {
							name: 'Simmons', flag: 'saskatchewan', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Morris', flag: 'bc', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Smith', flag: 'scotland', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Shuster', flag: 'usa', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				},
				4: {
					name : 'D',
					teams :  {
						1: {
							name: 'Koe', flag: 'alberta', gamesPlayed: 5, wins: 4, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Howard', flag: 'ontario', gamesPlayed: 4, wins: 2, losses: 2, percentage: 0.5, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Gunnlaugson', flag: 'manitoba', gamesPlayed: 4, wins: 2, losses: 2, percentage: 0.5, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Lyburn', flag: 'manitoba', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				}
			}
		},
		26: {
			pools : {
				1: {
					name : 'A',
					teams :  {
						1: {
							name: 'Bottcher', flag: 'alberta', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Mcewen', flag: 'manitoba', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Jacobs', flag: 'ontario', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Epping', flag: 'ontario', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.6, hammer: '0-1', steal: '3-1'
						}
					}
				},
				2: {
					name : 'B',
					teams :  {
						1: {
							name: 'Carruthers', flag: 'manitoba', gamesPlayed: 5, wins: 4, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Gushue', flag: 'newfoundland', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Edin', flag: 'sweden', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Laycock', flag: 'saskatchewan', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				},
				3: {
					name : 'C',
					teams :  {
						1: {
							name: 'Simmons', flag: 'saskatchewan', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Morris', flag: 'bc', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Smith', flag: 'scotland', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Shuster', flag: 'usa', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				},
				4: {
					name : 'D',
					teams :  {
						1: {
							name: 'Koe', flag: 'alberta', gamesPlayed: 5, wins: 4, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Howard', flag: 'ontario', gamesPlayed: 4, wins: 2, losses: 2, percentage: 0.5, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Gunnlaugson', flag: 'manitoba', gamesPlayed: 4, wins: 2, losses: 2, percentage: 0.5, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Lyburn', flag: 'manitoba', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				}
			}
		},
		46: {
			pools : {
				1: {
					name : 'A',
					teams :  {
						1: {
							name: 'Bottcher', flag: 'alberta', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Mcewen', flag: 'manitoba', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Jacobs', flag: 'ontario', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Epping', flag: 'ontario', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.6, hammer: '0-1', steal: '3-1'
						}
					}
				},
				2: {
					name : 'B',
					teams :  {
						1: {
							name: 'Carruthers', flag: 'manitoba', gamesPlayed: 5, wins: 4, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Gushue', flag: 'newfoundland', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Edin', flag: 'sweden', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Laycock', flag: 'saskatchewan', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				},
				3: {
					name : 'C',
					teams :  {
						1: {
							name: 'Simmons', flag: 'saskatchewan', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Morris', flag: 'bc', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Smith', flag: 'scotland', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Shuster', flag: 'usa', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				},
				4: {
					name : 'D',
					teams :  {
						1: {
							name: 'Koe', flag: 'alberta', gamesPlayed: 5, wins: 4, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Howard', flag: 'ontario', gamesPlayed: 4, wins: 2, losses: 2, percentage: 0.5, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Gunnlaugson', flag: 'manitoba', gamesPlayed: 4, wins: 2, losses: 2, percentage: 0.5, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Lyburn', flag: 'manitoba', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				}
			}
		},
		36: {
			pools : {
				1: {
					name : 'A',
					teams :  {
						1: {
							name: 'Bottcher', flag: 'alberta', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Mcewen', flag: 'manitoba', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Jacobs', flag: 'ontario', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Epping', flag: 'ontario', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.6, hammer: '0-1', steal: '3-1'
						}
					}
				},
				2: {
					name : 'B',
					teams :  {
						1: {
							name: 'Carruthers', flag: 'manitoba', gamesPlayed: 5, wins: 4, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Gushue', flag: 'newfoundland', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Edin', flag: 'sweden', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Laycock', flag: 'saskatchewan', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				},
				3: {
					name : 'C',
					teams :  {
						1: {
							name: 'Simmons', flag: 'saskatchewan', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Morris', flag: 'bc', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Smith', flag: 'scotland', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Shuster', flag: 'usa', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				},
				4: {
					name : 'D',
					teams :  {
						1: {
							name: 'Koe', flag: 'alberta', gamesPlayed: 5, wins: 4, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Howard', flag: 'ontario', gamesPlayed: 4, wins: 2, losses: 2, percentage: 0.5, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Gunnlaugson', flag: 'manitoba', gamesPlayed: 4, wins: 2, losses: 2, percentage: 0.5, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Lyburn', flag: 'manitoba', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				}
			}
		},
		99: {
			pools : {
				1: {
					name : 'A',
					teams :  {
						1: {
							name: 'Bottcher', flag: 'alberta', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Mcewen', flag: 'manitoba', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Jacobs', flag: 'ontario', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Epping', flag: 'ontario', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.6, hammer: '0-1', steal: '3-1'
						}
					}
				},
				2: {
					name : 'B',
					teams :  {
						1: {
							name: 'Carruthers', flag: 'manitoba', gamesPlayed: 5, wins: 4, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Gushue', flag: 'newfoundland', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Edin', flag: 'sweden', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Laycock', flag: 'saskatchewan', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				},
				3: {
					name : 'C',
					teams :  {
						1: {
							name: 'Simmons', flag: 'saskatchewan', gamesPlayed: 4, wins: 3, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Morris', flag: 'bc', gamesPlayed: 5, wins: 3, losses: 2, percentage: 0.6, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Smith', flag: 'scotland', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Shuster', flag: 'usa', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				},
				4: {
					name : 'D',
					teams :  {
						1: {
							name: 'Koe', flag: 'alberta', gamesPlayed: 5, wins: 4, losses: 1, percentage: 0.8, hammer: '0-1', steal: '3-1'
						},
						2: {
							name: 'Howard', flag: 'ontario', gamesPlayed: 4, wins: 2, losses: 2, percentage: 0.5, hammer: '0-1', steal: '3-1'
						},
						3: {
							name: 'Gunnlaugson', flag: 'manitoba', gamesPlayed: 4, wins: 2, losses: 2, percentage: 0.5, hammer: '0-1', steal: '3-1'
						},
						4: {
							name: 'Lyburn', flag: 'manitoba', gamesPlayed: 5, wins: 1, losses: 4, percentage: 0.2, hammer: '0-1', steal: '3-1'
						}
					}
				}
			}
		}
	}
}

/*
End Fake Objects		
*/
var Competition = function(){}
Competition.prototype.data = {};

createData();

Competition.fetchCompetitionByCompetitionId = function(competitionId, callback){
	if(CompetitionArray[id] == null){
		//error
	}
	callback(null, CompetitionArray[id]);
}

Competition.fetchDrawScoresByDrawId = function(competitionId, drawId){
	AllCompetitionArray[competitionId].draws[drawId].draws = '';
	return AllCompetitionArray[competitionId].draws[drawId];
}

Competition.fetchCurrentDrawScoresByCompetitionId = function(competitionId) {
	return CompetitionArray[competitionId].draws[1];
}

Competition.fetchCurrentCompetitions = function(){
	return CompetitionArray;
}

Competition.fetchAllDraws = function(competitionId){
	return AllCompetitionArray[competitionId].draws;
}
//Return current draw of given competition ID
Competition.fetchCurrentDraw = function(competitionId) {
	var closestDate = new Date('Sun Sep 24 1990 14:17:44 GMT-0600');
	var currentDraw;
	var currentDrawId = -1;
	for(var drawId in AllCompetitionArray[competitionId].draws){
		var draw = AllCompetitionArray[competitionId].draws[drawId];
		if ((new Date()) > (draw.time)){
			if (draw.time > closestDate) {
				closestDate = draw.time;
				currentDraw = draw;
				currentDrawId = drawId;
			}
		}
	}
	currentDraw.type = AllCompetitionArray[competitionId].type;
	currentDraw.name = AllCompetitionArray[competitionId].name;
	currentDraw.competitionId = competitionId;
	currentDraw.drawId = currentDrawId;
	currentDraw.draws = Competition.fetchAllDraws(competitionId);
	return currentDraw;
}

Competition.fetchStandings = function(competitionId){
	return StandingsArray[competitionId];
}

module.exports = Competition;