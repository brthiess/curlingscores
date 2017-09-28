var CompetitionArray = {
		1: { 
			name: "Tour Challenge", category : "Men's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
			draws: {
				1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
					games: {
					1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 3, score2: 4,	 end: '5', over: false},
					2: {team1: 'John Epping', team2: 'Jake Walker', score1: 9, score2: 2,	 end: '5', over: false},
					3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 1, score2: 1,	 end: '4', over: false},
					4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6', over: true},
					5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false},
					6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5', over: false},
					7: {team1: 'Glenn Howard', team2: 'Peter De Cruz', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5', over: false}
					}
				},
				2: {time: new Date("Sun Sep 24 2017 17:00:00 GMT-0600"), 
					games: {
					1: {team1: 'Mike Mcewen', team2: 'Brad Jacobs', score1: 2, score2: 4,	 end: '5', over: false},
					2: {team1: 'John Epping', team2: 'Jake Walker', score1: 9, score2: 2,	 end: '8', over: false},
					3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4', over: false},
					4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: 1, score2: 4,	 end: '6', over: false},
					5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5', over: false},
					6: {team1: 'John Morris', team2: 'Steve Laycock', score1: 6, score2: 2,	 end: '5', over: false},
					7: {team1: 'Pat Simmons', team2: 'Peter De Cruz', score1: 2, score2: 3,	 end: '7', over: true}
					}
				}
			}
		}, 
		2: { 
			name: "Tour Challenge", category : "Women's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
			draws: {
				1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
					games: {
					1: {team1: 'Shannon Kleibrink', team2: 'Brad Jacobs', score1: (Math.floor(Math.random() * 6) + 1), score2: 4,	 end: '3', over:false},
					2: {team1: 'John Epping', team2: 'Jake Walker', score1: 1, score2: 2,	 end: '5'},
					3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 1,	 end: '4'},
					4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '3'},
					5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5'},
					6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '8', over: true},
					7: {team1: 'Glenn Howard', team2: 'Peter De Cruz', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '3'}
					}
				}
			}
		}, 
		3: { 
			name: "HDF Shootout", category : "Women's", icon : "4-man-team.png", location: 'Regina, SK', id: 1,
			draws: {
				1: {time: new Date("Sun Sep 24 2017 14:00:00 GMT-0600"), 
					games: {
					1: {team1: 'Shannon Kleibrink', team2: 'Brad Jacobs', score1: (Math.floor(Math.random() * 6) + 1), score2: 2,	 end: '5'},
					2: {team1: 'John Epping', team2: 'Jake Walker', score1: 1, score2: 3,	 end: '5'},
					3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 4,	 end: '4'},
					4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 1,	 end: '6'},
					5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 1,	 end: '5'},
					6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 1,	 end: '5'},
					7: {team1: 'Glenn Howard', team2: 'Peter De Cruz', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5'}
					}
				}
			}
		}, 
		4: { 
			name: "HDF Shootout", category : "Women's", icon : "4-man-team.png", location: 'Edmonton, AB', id: 1,
			draws: {
				1: {time: new Date("Sun Sep 24 2017 14:30:00 GMT-0600"), 
					games: {
					1: {team1: 'Shannon Kleibrink', team2: 'Brad Jacobs', score1: (Math.floor(Math.random() * 6) + 1), score2: 4,	 end: '5'},
					2: {team1: 'John Epping', team2: 'Jake Walker', score1: 1, score2: 2,	 end: '5'},
					3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 1,	 end: '4'},
					4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6'},
					5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5'},
					6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5'},
					7: {team1: 'Glenn Howard', team2: 'Peter De Cruz', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5'}
					}
				}
			}
		}, 
		5: { 
			name: "Service Expert's Mixed Doubles Classic",  category : "Mixed Double's", icon : "2-man-team.png", location: 'Sherwood Park, AB', id: 1,
			draws: {
				1: {time: new Date("Sun Sep 24 2017 14:30:00 GMT-0600"), 
					games: {
					1: {team1: 'Shannon Kleibrink', team2: 'Brad Jacobs', score1: (Math.floor(Math.random() * 6) + 1), score2: 4,	 end: '5'},
					2: {team1: 'John Epping', team2: 'Jake Walker', score1: 1, score2: 2,	 end: '5'},
					3: {team1: 'Niklas Edin', team2: 'Kevin Koe', score1: 7, score2: 1,	 end: '4'},
					4: {team1: 'Brendan Bottcher', team2: 'Brad Gushue', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 4,	 end: '6'},
					5: {team1: 'Reid Carruthers', team2: 'Charley Thomas', score1: 4, score2: 5,	 end: '5'},
					6: {team1: 'John Morris', team2: 'Steve Laycock', score1: (Math.floor(Math.random() * 6) + 1  ), score2: 2,	 end: '5'},
					7: {team1: 'Glenn Howard', team2: 'Peter De Cruz', score1: 2, score2: (Math.floor(Math.random() * 6) + 1  ),	 end: '5'}
					}
				}
			}
		}
	}
	
var StandingsArray = {
	1: {
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
	2: {
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
	3: {
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
	4: {
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
	5: {
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
/*
End Fake Objects		
*/
var Competition = function(){}
Competition.prototype.data = {};

Competition.fetchCompetitionByCompetitionId = function(competitionId, callback){
	if(CompetitionArray[id] == null){
		//error
	}
	callback(null, CompetitionArray[id]);
}

Competition.fetchDrawScoresByDrawId = function(competitionId, drawId){
	return CompetitionArray[competitionId].draws[drawId];
}

Competition.fetchCurrentDrawScoresByCompetitionId = function(competitionId) {
	return CompetitionArray[competitionId].draws[1];
}

Competition.fetchCurrentCompetitions = function(){
	return CompetitionArray;
}

//Return current draw of given competition ID
Competition.fetchCurrentDraw = function(competitionId) {
	var closestDate = new Date('Sun Sep 24 1990 14:17:44 GMT-0600');
	var currentDraw;
	var currentDrawId = -1;
	for(var drawId in CompetitionArray[competitionId].draws){
		var draw = CompetitionArray[competitionId].draws[drawId];
		if ((new Date()) > (draw.time)){
			if (draw.time > closestDate) {
				closestDate = draw.time;
				currentDraw = draw;
				currentDrawId = drawId;
			}
		}
	}
	currentDraw.name = CompetitionArray[competitionId].name;
	currentDraw.competitionId = competitionId;
	currentDraw.drawId = currentDrawId;
	return currentDraw;
}

Competition.fetchStandings = function(competitionId){
	return StandingsArray[competitionId];
}

module.exports = Competition;