$(document).ready(function () {
	$('dl.accordion dd').hide();

	$('dl.accordion dt').on('click', function () {

		$("dl.accordion dt[data-active]").removeAttr('data-active').next().slideUp();


		$(this).attr('data-active', true).next().slideDown();

	});

});