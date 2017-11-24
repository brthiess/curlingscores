function getScoresView(competitionId, drawId, callback) {
	$.ajax({
		method: "GET",
		url: "/views/scores/" + competitionId + (drawId != null ? "/" + drawId : ""),
		success: function(data) {
			callback(data);
		},
		error: function(data){
			console.log(data);
		}
	});
}

function getScoresGamesView(competitionId, drawId, callback) {
	setTimeout(function(){$.ajax({
		method: "GET",
		url: "/views/scores/draws/" + competitionId + (drawId != null ? "/" + drawId : ""),
		success: function(data) {
			callback(data);
		},
		error: function(data){
			console.log(data);
		}
	});}, 500);
}

function getGameModalView(gameId, callback) {
	$.ajax({
		method: "GET",
		url: "/views/games/" + gameId,
		success: function(data) {
			callback(data);
		},
		error: function(data){
			callback(data, false)
		}
	});
}

function getRankingsView(type, number, year, category, callback){
	$.ajax({
		method: "GET",
		url: "/views/rankings/" + type + "/" + category + "/" + year + "/" + number,
		success: function(data) {
			callback(data);
		},
		error: function(data){
			callback(data, false)
		}
	});
}

function getScheduleView(year, category, callback){
	$.ajax({
		method: "GET",
		url: "/views/schedule/" + category + "/" + year,
		success: function(data) {
			callback(data);
		},
		error: function(data){
			callback(data, false)
		}
	});
}

function getTeamsView(category, callback){
	$.ajax({
		method: "GET",
		url: "/views/teams/" + category + "/",
		success: function(data) {
			callback(data);
		},
		error: function(data){
			callback(data, false)
		}
	});
}