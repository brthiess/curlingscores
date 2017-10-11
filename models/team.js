TeamArray = {
	1: {
		name: 'Mcewen',
		skip: 'Mike Mcewen',
		third: 'BJ Neufeld',
		second: 'Matt Wozniak',
		lead: 'Denni Neufeld'
	},
	2: {
		name: 'Jacobs',
		skip: 'Brad Jacobs',
		third: 'Ryan Fry',
		second: 'EJ Harnden',
		lead: 'Ryan Harnden'
	},
	3: {
		name: 'Epping',
		skip: 'John Epping',
		third: 'Matt Camm',
		second: 'Patrick Janssen',
		lead: 'Tim March'
	},
	4: {
		name: 'Gushue',
		skip: 'Brad Gushue',
		third: 'Mark Nichols',
		second: 'Brett Gallant',
		lead: 'Geoff Walker'
	},
	5: {
		name: 'Carruthers',
		skip: 'Reid Carruthers',
		third: 'Braeden Moskowy',
		second: 'Derek Samalgaski',
		lead: 'Colin Hodgson'
	},
	6: {
		name: 'Bottcher',
		skip: 'Brendan Bottcher',
		third: 'Darren Moulding',
		second: 'Brad Thiessen',
		lead: 'Karrick Martin'
	},
	7: {
		name: 'Ulsrud',
		skip: 'Thomas Ulsrud',
		third: 'Torger Nergaard',
		second: 'Christopher Svae',
		lead: 'Haavard Vad Petersson'
	},
	8: {
		name: 'Howard',
		skip: 'Glenn Howard',
		third: 'Richard Hart',
		second: 'David Mathers',
		lead: 'Scott Howard'
	},
	9: {
		name: 'Simmons',
		skip: 'Pat Simmons',
		third: 'Colton Lott',
		second: 'Kyle Doering',
		lead: 'Robbie Gordon'
	},
	10: {
		name: 'Laycock',
		skip: 'Steve Laycock',
		third: 'Kirk Muyres',
		second: 'Matt Dunstone',
		lead: 'Dallan Muyres'
	},
	11: {
		name: 'Koe',
		skip: 'Kevin Koe',
		third: 'Marc Kennedy',
		second: 'Brent Laing',
		lead: 'Ben Hebert'
	},
	12: {
		name: 'Heidt',
		skip: 'Kody Hartung',
		third: 'Josh Heidt',
		second: 'Tyler Hartung',
		lead: 'Kelly Knapp'
	},
	13: {
		name: 'Balsdon',
		skip: 'Greg Balsdon',
		third: 'Don Bowser',
		second: 'Jonathon Beuk',
		lead: 'Scott Chadwick'
	},
	14: {
		name: 'Edin',
		skip: 'Niklas Edin',
		third: 'Oskar Eriksson',
		second: 'Rasmus Wrana',
		lead: 'Christoffer Sundgren'
	},
	15: {
		name: 'Smith',
		skip: 'Kyle Smith',
		third: 'Thomas Muirhead',
		second: 'Kyle Waddell',
		lead: 'Cammy Smith'
	},
	16: {
		name: 'Shuster',
		skip: 'John Shuster',
		third: 'Tyler George',
		second: 'Matt Hamilton',
		lead: 'John Landsteiner'
	},
	17: {
		name: 'Gunnlaugson',
		skip: 'Jason Gunnlaugson',
		third: 'Alex Forrest',
		second: 'Ian McMillan',
		lead: 'Connor Njegovan'
	},
	18: {
		name: 'Morris',
		skip: 'Jim Cotter',
		third: 'John Morris',
		second: 'Katlin Schneider',
		lead: 'Tyrell Griffith'
	},
	19: {
		name: 'McCormick',
		skip: 'Heath McCormick',
		third: 'Christopher Plys',
		second: 'Korey Dropkin',
		lead: 'Thomas Howell'
	},
	20: {
		name: 'Walstad',
		skip: 'Steffen Walstad',
		third: 'Markus Hoiberg',
		second: 'Magnus Negrotten',
		lead: 'Magnus Vagberg'
	},
	21: {
		name: 'Homan',
		skip: 'Rachel Homan',
		third: 'Emma Miskew',
		second: 'Joanne Courtney',
		lead: 'Lisa Weagle'
	},
	22: {
		name: 'Kleibrink',
		skip: 'Shannon Kleibrink',
		third: 'Sarah Wilkes',
		second: 'Kalynn Park',
		lead: 'Alison Thiessen'
	},
	23: {
		name: 'Jones',
		skip: 'Jennifer Jones',
		third: 'Kaitlyn Lawes',
		second: 'Jill Officer',
		lead: 'Dawn Mcewen'
	},
	24: {
		name: 'Thomas',
		skip: 'Charley Thomas',
		third: 'Mick Lizmore',
		second: 'Brandon Klassen',
		lead: 'DJ Kidby'
	},
	25: {
		name: 'Thiessen/Thiessen',
		skip: 'Alison Thiessen',
		third: 'Brad Thiessen',
		type: 'Mixed Doubles'
	},
	26: {
		name: 'Thomas/Park',
		skip: 'Charley Thomas',
		third: 'Kalynn Park',
		type: 'Mixed Doubles'
	},	
	27: {
		name: 'Bottcher/Sauder',
		skip: 'Brendan Bottcher',
		third: 'Bobby Sauder',
		type: 'Mixed Doubles'
	},	
	28: {
		name: 'Homan/Morris',
		skip: 'Rachel Homan',
		third: 'John Morris',
		type: 'Mixed Doubles'
	},	
	29: {
		name: 'Miskew/Fry',
		skip: 'Emma Miskew',
		third: 'Ryan Fry',
		type: 'Mixed Doubles'
	},	
	30: {
		name: 'Sweeting/Gushue',
		skip: 'Val Sweeting',
		third: 'Brad Gushue',
		type: 'Mixed Doubles'
	},	
	31: {
		name: 'Laing/Jones',
		skip: 'Jennifer Jones',
		third: 'Brent Laing',
		type: 'Mixed Doubles'
	},
	32: {
		name: 'Ferguson/Ferguson',
		skip: 'Turd Ferguson',
		third: 'Turd Ferguson',
		type: 'Mixed Doubles'
	}
}

var Team = function() {};
Team.prototype.data = {};

Team.fetchTeamById = function(id){
	return TeamArray[id];
}

module.exports = Team;