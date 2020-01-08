
$(document).ready(function () {

	let btnTop = $('#back-to-top');
	
	$(window).scroll(function () {
		if($(window).scrollTop() > 400) {
			btnTop.fadeIn(500);
		} else {
			btnTop.fadeOut(500);
		}
		
	});

	btnTop.on('click', function () {
		$('html, body').animate({scrollTop: 0}, 1500);
	})
	
});
