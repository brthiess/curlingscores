$(document).ready(function(){
	$(window).scroll(function (event) {
		var y = $(this).scrollTop();
		if (y >= 400)
		  $('.logo-container img').addClass('small');
		else
		  $('.logo-container img').removeClass('small');
	});
});