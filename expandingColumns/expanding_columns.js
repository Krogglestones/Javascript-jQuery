
$(document).ready(function () {

	create_markup();

	let btnTop = $('#back-to-top');

	$(window).scroll(function () {
		if($(window).scrollTop() > 50) {
			btnTop.fadeIn(500);
		} else {
			btnTop.fadeOut(500);
		}

	});

	btnTop.on('click', function () {
		$('html, body').animate({scrollTop: 0}, 1000);
	})

});


function create_markup() {

	$('.col_expand').each(function () {

		let link_text = $(this).attr('data-link-text');

		let content = $(this).html();

		$(this).html('<div class="expanding_col_container" style="height:0px;"><div class="expanding_col_content">'+ content +'</div></div>');



		$(this).append('<div class="expanding_col_link">' + link_text + '<hr>' + '</div>');

	});

	activate_col();
	
}

function activate_col() {

	$('.col_expand .expanding_col_link').on('click', function () {

		let new_height = null;
		let selected_col = $(this).closest('.col_expand');

		let selected_content = selected_col.find('.expanding_col_container');

		selected_col.toggleClass('open');

		if(selected_col.hasClass('open')){
			new_height = selected_col.find('.expanding_col_content').outerHeight();
		} else {
			new_height = 0;
		}

		selected_content.animate({'height': new_height+'px'}, 1000, function () {

			if(new_height != 0) {
				$(this).removeAttr('style');
			}

		});

	});

}
