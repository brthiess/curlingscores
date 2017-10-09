var RankingsArray = [
	{
		category: 'men',
		year: '2017',
		name: 'Steffen Walstad',
		location: 'Norway',
		money: '25912',
		totalPoints: 306.449,
		ytdPoints: 122.443
	},
	{
		category: 'men',
		year: '2017',
		name: 'Brad Jacobs',
		location: 'Ontario',
		money: '25300',
		totalPoints: 561.939,
		ytdPoints: 112.333
	},
	{
		category: 'men',
		year: '2017',
		location: 'Newfoundland',
		name: 'Brad Gushue',
		money: '20200',
		totalPoints: 656.489,
		ytdPoints: 135.957
	},
	{
		category: 'men',
		year: '2017',
		location: 'Sweden',
		name: 'Niklas Edin',
		money: '22500',
		totalPoints: 651.625,
		ytdPoints: 112.509
	},
	{
		category: 'men',
		year: '2017',
		location: 'Manitoba',
		name: 'Mike Mcewen',
		money: '18000',
		totalPoints: 401.222,
		ytdPoints: 60.571
	},
	{
		category: 'men',
		year: '2017',
		location: 'Ontario',
		name: 'John Epping',
		money: '11100',
		totalPoints: 420.077,
		ytdPoints: 69.444
	},
	{
		category: 'men',
		year: '2017',
		location: 'Alberta',
		name: 'Kevin Koe',
		money: '10900',
		totalPoints: 386.907,
		ytdPoints: 3.737
	},
	{
		category: 'men',
		year: '2017',
		location: 'Switzerland',
		name: 'Peter De Cruz',
		money: '5500',
		totalPoints: 376.692,
		ytdPoints: 112.333
	},
	{
		category: 'men',
		year: '2017',
		location: 'Scotland',
		name: 'Kyle Smith',
		money: '6500',
		totalPoints: 374.030,
		ytdPoints: 56.839
	},
	{
		category: 'men',
		year: '2017',
		location: 'Norway',
		name: 'Thomas Ulsrud',
		money: '3300',
		totalPoints: 356.660,
		ytdPoints: 82.333
	},
	{
		category: 'men',
		year: '2017',
		location: 'Manitoba',
		name: 'Jason Gunnlaugson',
		money: '',
		totalPoints: 314.582,
		ytdPoints: 125.492
	},
	{
		category: 'men',
		year: '2017',
		location: 'British Columbia',
		name: 'John Morris',
		money: '',
		totalPoints: 297.393,
		ytdPoints: 77.990
	},
	{
		category: 'men',
		year: '2017',
		location: 'Manitoba',
		name: 'Pat Simmons',
		money: '8450',
		totalPoints: 294.888,
		ytdPoints: 84.427
	},
	{
		category: 'men',
		year: '2017',
		location: 'United States',
		name: 'John Shuster',
		money: '800',
		totalPoints: 232.153,
		ytdPoints: 77.667
	},
	{
		category: 'men',
		year: '2017',
		location: 'Ontario',
		name: 'Glenn Howard',
		money: '1250',
		totalPoints: 232.153,
		ytdPoints: 66.234
	},
	{
		category: 'men',
		year: '2017',
		location: 'United States',
		name: 'Heath McCormick',
		money: '500',
		totalPoints: 219.664,
		ytdPoints: 33.513
	},
	{
		category: 'men',
		year: '2017',
		location: 'Ontario',
		name: 'Greg Balsdon',
		money: '600',
		totalPoints: 217.431,
		ytdPoints: 12.333
	},
	{
		category: 'men',
		year: '2017',
		location: 'Alberta',
		name: 'Brendan Bottcher',
		money: '5500',
		totalPoints: 193.431,
		ytdPoints: 50.33
	},
	{
		category: 'men',
		year: '2017',
		location: 'Manitoba',
		name: 'William Lyburn',
		money: '8000',
		totalPoints: 122.33,
		ytdPoints: 112.333
	},
	{
		category: 'men',
		year: '2017',
		location: 'China',
		name: 'Riu Lui',
		money: '1500',
		totalPoints: 57.887,
		ytdPoints: 11.333
	},
	{
		category: 'men',
		year: '2017',
		location: 'Quebec',
		name: 'Jean-Michel Menard',
		money: '600',
		totalPoints: 15.431,
		ytdPoints: 12.333
	},
	{
		category: 'men',
		year: '2017',
		location: 'Saskatchewan',
		name: 'Josh Heidt',
		money: '1300',
		totalPoints: 29.667,
		ytdPoints: 18.333
	}
];

RankingsCategories = {
	years: [
			{year: 2014, name: '2013-2014'},
			{year: 2015, name: '2014-2015'},
			{year: 2016, name: '2015-2016'},
			{year: 2017, name: '2016-2017'},
			{year: 2018, name: '2017-2018'},
			],
	categories: ['men', 'women']
}

var Rankings = function(){}
Rankings.prototype.data = {};

Rankings.fetchTopRankings = function(number, category, year){
	RankingsArray.sort(function(a, b){
		return a.totalPoints - b.totalPoints;
	}).reverse();
	RankingsArray.forEach(function (ranking, i) {
		ranking.rank = i + 1;
	});
	return RankingsArray.filter(function(el) {
		return el.category == category; 
		return el.year = year;
	}).slice(0, number);
}

Rankings.fetchCategories = function(){
	return RankingsCategories;
}

module.exports = Rankings;