var Event = require('../models/event');


//Home page
exports.index = function(req, res, next) {
	var events = Event.fetchAllCurrentEvents(function(events) {
		if (events != null && events.length > 0){
			var activeEventId = events[0].eventId;
		}
		req.app.set('layout', 'layouts/layout');
		res.render("index", {competitions: events,
							 activeCompetitionId: activeEventId,
							 asyncScoreboardLoading: true
							});
	});
};

