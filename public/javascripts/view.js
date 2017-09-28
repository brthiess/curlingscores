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