function getDrawScoresJSON(competitionId, drawId, callback){
	$.ajax({
		url: '/data/scores/' + competitionId + '/' + drawId,
		dataType: 'json',
		success: function(data){
			callback(data);
		},
		error: function(data){
			console.log('error');
			console.log(data);
		}
	});
}