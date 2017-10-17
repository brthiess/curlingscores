$(document).ready(function(){
	$(window).scroll(function (event) {
		var y = $(this).scrollTop();
		if (y >= 400)
		  $('.logo-container img').addClass('small');
		else
		  $('.logo-container img').removeClass('small');
	});
});

/* Scoreboard */
function showCompetition(listItem, competitionId){
	$('.competition-list-item').removeClass('active');
	$(listItem).addClass('active');
	$('.scores-container').addClass('loading');
	getScoresView(competitionId, function(viewHtml){
		$('.scores-container').replaceWith(viewHtml);
		currentCompetitionId = competitionId;
		currentDrawId = $('.scores-container [data-draw-id]').attr('data-draw-id');
		$('.scores-container').removeClass('loading');
	});
}

function refreshDrawScores(){
	if(currentCompetitionId !== null && currentDrawId !== null && currentCompetitionId > 0 && currentDrawId > 0){
		console.log('refreshing scores');
		getDrawScoresJSON(currentCompetitionId, currentDrawId, function(data){
			for (var game in data.games){
				
				$("[data-game-id='" + game + "']").find("[data-score1]").html(data.games[game].score1);
				$("[data-game-id='" + game + "']").find("[data-score2]").html(data.games[game].score2);
				var end = (data.games[game].over ? "Final (" + data.games[game].end + ")" : ordinal_suffix_of(data.games[game].end) + " end");
				$("[data-game-id='" + game + "']").find("[data-end]").html(end);
				$("[data-game-id='" + game + "']").find("[data-hammer1]").html((data.games[game].team1CurrentHammer ? "<img src='/images/hammer.png'/>" : ""));
				$("[data-game-id='" + game + "']").find("[data-hammer2]").html((!data.games[game].team1CurrentHammer ? "<img src='/images/hammer.png'/>" : ""));
			}
			setTimeout(refreshDrawScores, 10000);
		});
	}
	else {
		console.log('try again');
		setTimeout(refreshDrawScores, 10000);
	}
}
function showOnScoreboard(section) {
	$("[data-scoreboard-section]").removeClass('active');
	$("[data-scoreboard-section=" + section + "]").addClass('active');
}

function toggleMobileMenu(element) {
	$('.mobile-nav-container').toggleClass('hidden');
	toggleHtml(element, 'Close', 'Menu');
}

function toggleHtml(element, text1, text2) {
	if($(element).html() == text1) {
		$(element).html(text2);
	}
	else {
		$(element).html(text1);
	}
}

$(document).ready(function(){
	if($('competition-list').scrollLeft() <= 1){
		$('.left-arrow').addClass('hidden');
	}
	else if ($('.competition-list').length > 0 && ($('competition-list').scrollLeft() + $(window).width()) >= $('.competition-list')[0].scrollWidth) {
		$('.right-arrow').addClass('hidden');
	}
	$('.competition-list').scroll(function(){
		var scrollLeft = $(this).scrollLeft();
		if (scrollLeft <= 1){
			$('.left-arrow').addClass('hidden');
			$('.right-arrow').removeClass('hidden');
		}
		else if ((scrollLeft + $(window).width()) >= $('.competition-list')[0].scrollWidth) {
			$('.right-arrow').addClass('hidden');
			$('.left-arrow').removeClass('hidden');
		}
	});
});

/*modal*/
var modalOpen = false;
function showModalWithGameView(gameId, modalTitle) {
	showModal(modalTitle);
	modalLoad(true);
	getGameModalView(gameId, function(html, err){
		modalLoad(false);
		if(err == undefined) {
			$("#modal-content").html(html);
			if(!modalHistoryShowsItsOpen()) {
				history.pushState({modal: "open", title: modalTitle, gameId: gameId}, "", "#score");
			}
		}
		else {
			//error
		}
		
	});	
}
function showModal(modalTitle){
	$("#modal-overlay").addClass("visible");
	$("#modal-title").text(modalTitle);
	$("body").css("overflow", "hidden");
	modalOpen = true;
}
function closeModal(){
	$("#modal-overlay").removeClass("visible");
	$("body").css("overflow", "");
	if(modalHistoryShowsItsOpen()){
		history.back();
	}
	$("#modal-content").html("");
	modalOpen = false;
}
function modalLoad(showLoading){
	if(showLoading){
		$("#modal-content-container").addClass("loading");
	}
	else {
		$("#modal-content-container").removeClass("loading");
	}
}
//return true if the current history state suggests that the modal is open
function modalHistoryShowsItsOpen(){
	if(history.state !== null && history.state.modal == 'open') {
		return true;
	}
	else {
		return false;
	}
}
window.onpopstate = function(event) {
	if(modalOpen == true){
		closeModal();
	}
	console.log(history.state);
	if(modalOpen == false && modalHistoryShowsItsOpen()){
		showModalWithGameView(history.state.gameId, history.state.modalTitle);
	}

}

/* rankings */
function updateRankingsTable(type, number, year, category, replaceHistory){
	$("[data-id='rankings-table']").addClass("loading");
	getRankingsView(type, number, year, category, function(data, err){
		$("[data-id='rankings-table']").removeClass("loading");
		if(err == undefined){
			$("[data-id='rankings-table']").replaceWith(data);
			if(replaceHistory != null && replaceHistory == true) {
				history.replaceState({}, "", "/rankings/" + type + "/" + category + "/" + year + "/");
			}
		}
		else {
			//error
		}
	});
}

function showOnRankings(type, year, category, replaceHistory ){
	$("[data-rankings-type]").removeClass('active');
	$("[data-rankings-type=" + type + "]").addClass('active');
	if(replaceHistory != null && replaceHistory == true) {
		history.replaceState({}, "", "/rankings/" + type + "/" + category + "/" + year + "/");
	}
}

/* schedule */
function updateScheduleTable(year, category, replaceHistory){
	$("[data-id='schedule-table']").addClass("loading");
	getScheduleView(year, category, function(data, err){
		$("[data-id='schedule-table']").removeClass("loading");
		if(err == undefined){
			$("[data-id='schedule-table']").replaceWith(data);
			if(replaceHistory != null && replaceHistory == true) {
				history.replaceState({}, "", "/schedule/" + category + "/" + year + "/");
			}
		}
		else {
			//error
		}
	});
}

function updateTeamsTable(category, replaceHistory){
	$("[data-id='teams-table']").addClass("loading");
	getTeamsView(category, function(data, err){
		$("[data-id='teams-table']").removeClass("loading");
		if(err == undefined){
			$("[data-id='teams-table']").replaceWith(data);
			if(replaceHistory != null && replaceHistory == true) {
				history.replaceState({}, "", "/teams/" + category + "/");
			}
		}
		else {
			//error
		}
	});
}

/********
Functions 
*********/
function ordinal_suffix_of(i) {
	var j = i % 10,
		k = i % 100;
	if (j == 1 && k != 11) {
		return i + "st";
	}
	if (j == 2 && k != 12) {
		return i + "nd";
	}
	if (j == 3 && k != 13) {
		return i + "rd";
	}
	return i + "th";
}
