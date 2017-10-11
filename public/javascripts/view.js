function getScoresView(competitionId, callback) {
	$.ajax({
		method: "GET",
		url: "/views/scores/" + competitionId,
		success: function(data) {
			callback(data);
		},
		error: function(data){
			console.log(data);
		}
	});
}

function getGameModalView(gameId, callback) {
	$.ajax({
		method: "GET",
		url: "/views/games/" + gameId,
		success: function(data) {
			callback(data);
		},
		error: function(data){
			console.log(data);
		}
	});
}