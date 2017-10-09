var SocialArray = [
	{
		type: "facebook",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2017 11:20:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	{
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2016 11:20:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	{
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2017 21:20:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	{
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2017 10:20:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	{
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2017 11:22:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	{
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2017 11:20:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	{
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2017 11:20:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	{
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2017 11:25:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	 {
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2017 11:30:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	{
		type: "twitter",
		username: "Curling Zone",
		timestamp: "Fri Oct 06 2017 11:40:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	 {
		type: "twitter",
		username: "World Curling Tour",
		timestamp: "Fri Oct 06 2017 11:50:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	 {
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2017 11:10:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	 {
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2017 11:20:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	 {
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2017 11:20:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	 {
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2017 10:20:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	 {
		type: "twitter",
		username: "World Curling Tour",
		timestamp: "Fri Oct 06 2014 11:20:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	},
	 {
		type: "twitter",
		username: "CurlingZone",
		timestamp: "Fri Oct 06 2015 11:20:49 GMT-0600 (Mountain Daylight Time)",
		content: "Tracy Fleury, Mary-Anne Arsenault, Julie Tippin highlight StuSells Toronto Tankard starting Friday! http://bit.ly/2ySoceq"
	}
];

var Social = function(){}
Social.prototype.data = {};

Social.fetchRecentPosts = function(number){
	SocialArray.sort(function(a, b){
		return (new Date(a.timestamp) - new Date(b.timestamp));
	});
	return SocialArray.slice(0 - number).reverse();
}

module.exports = Social;