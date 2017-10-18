var slideArray = [
	{ 
		title: 'Rachel Homan wins Curlers Corner Autumn Gold Curling Classic',
		subtitle: 'Rachel Homan (Ottawa, ON) wins the Curlers Corner Autumn Gold Curling Classic, defeating Nina Roth (Blaine, USA) 6-4 at the Calgary Curling Club in Calgary, Canada.',
		buttonTitle: 'Read More',
		image: 'rachel-homan.jpg',
		newsId: 1
	},
	{ 
		title: 'Julie Tippin wins StuSells Toronto Tankard',
		subtitle: 'Julie Tippin (Woodstock, ON) wins the StuSells Toronto Tankard, defeating Chrissy Cadorin (Thornhill, ON) 5-2 at the High Park Club in Toronto, Canada.',
		buttonTitle: 'Read More',
		image: 'julie-tippin.jpg',
		newsId: 2
	},
	{ 
		title: 'Brad Gushue wins StuSells Toronto Tankard',
		subtitle: 'Brad Gushue (St. John\'s, NL) wins the StuSells Toronto Tankard, defeating Codey Maus (London, ON) 4-2 at the High Park Club in Toronto, Canada.',
		buttonTitle: 'Read More',
		image: 'brad-gushue.jpg',
		newsId: 3
	},
	{ 
		title: 'EunJung Kim wins Paf Masters in Finland',
		subtitle: 'EunJung Kim (Uiseong, Korea) wins the Paf Masters, defeating Shannon Kleibrink (Calgary, Canada) 7-5.',
		buttonTitle: 'Read More',
		image: 'korea.jpg',
		newsId: 4
	}
]

var Slides = function(){}
Slides.prototype.data = {};

Slides.getSlides = function(){
	return slideArray;
}

module.exports = Slides;