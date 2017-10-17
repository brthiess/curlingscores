var slideArray = [
	{ 
		title: 'Rachel Homan wins Curlers Corner Autumn Gold Curling Classic',
		subtitle: 'Rachel Homan (Ottawa, ON) wins the Curlers Corner Autumn Gold Curling Classic, defeating Nina Roth (Blaine, USA) 6-4 at the Calgary Curling Club in Calgary, Canada.',
		buttonTitle: 'Read More'
	}
]

var Slides = function(){}
Slides.prototype.data = {};

Slides.getSlides = function(){
	return slideArray;
}

module.exports = Slides;