function getScoresView(competitionId, drawId, callback) {
	setTimeout(function() {$.ajax({
		method: "GET",
		url: "/views/scores/" + competitionId + (drawId != null ? "/" + drawUd : ""),
		success: function(data) {
			callback(data);
		},
		error: function(data){
			console.log(data);
		}
	});
	}, 1000);
}

function getGameModalView(gameId, callback) {
	setTimeout(function() {$.ajax({
		method: "GET",
		url: "/views/games/" + gameId,
		success: function(data) {
			callback(data);
		},
		error: function(data){
			callback(data, false)
		}
	});
	}, 2000);
}

function getRankingsView(type, number, year, category, callback){
	setTimeout(function() {$.ajax({
		method: "GET",
		url: "/views/rankings/" + type + "/" + category + "/" + year + "/" + number,
		success: function(data) {
			callback(data);
		},
		error: function(data){
			callback(data, false)
		}
	});
	}, 500);
}

function getScheduleView(year, category, callback){
	setTimeout(function() {$.ajax({
		method: "GET",
		url: "/views/schedule/" + category + "/" + year,
		success: function(data) {
			callback(data);
		},
		error: function(data){
			callback(data, false)
		}
	});
	}, 500);
}

function getTeamsView(category, callback){
	setTimeout(function() {$.ajax({
		method: "GET",
		url: "/views/teams/" + category + "/",
		success: function(data) {
			callback(data);
		},
		error: function(data){
			callback(data, false)
		}
	});
	}, 500);
}