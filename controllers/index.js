
exports.index = function(req, res, next) {
	var competitions = {
		1 : {name: "Tour Challenge", time : "3:00pm ET", category : "Men's", icon : "4-man-team.png"}, 
		2 : {name: "Tour Challenge", time : "3:00pm ET", category : "Men's", icon : "4-man-team.png"},
		3 : {name: "HDF Shootout", time : "3:00pm ET", category : "Men's", icon : "4-man-team.png"},
		4 : {name: "Tour Challenge", time : "3:00pm ET", category : "Men's", icon : "4-man-team.png"}
	}
  res.render('index', {competitions: competitions, title: "World Curling Tour"});
};