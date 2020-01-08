$(document).ready(function () {
	$('.your-class').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		centerMode: true,
		centerPadding: '60px',

	});
});

const MESSAGE = document.querySelector('#message');

document.querySelector('#vacationForm').addEventListener('submit', theMessage);

$(function () {
	$("#tabs").tabs();
});

$(function () {
	$("#draggable1").draggable({revert: "invalid"});
	$("#draggable2").draggable({revert: "invalid"});
	$("#draggable3").draggable({revert: "invalid"});
	$("#draggable4").draggable({revert: "invalid"});
	$("#draggable5").draggable({revert: "invalid"});
	$("#draggable6").draggable({revert: "invalid"});
	$("#draggable7").draggable({revert: "invalid"});
	$("#draggable8").draggable({revert: "invalid"});
	$("#draggable9").draggable({revert: "invalid"});
	$("#draggable10").draggable({revert: "invalid"});
	$("#draggable11").draggable({revert: "invalid"});
	$("#draggable12").draggable({revert: "invalid"});
	$("#draggable13").draggable({revert: "invalid"});
	$("#draggable14").draggable({revert: "invalid"});
	$("#draggable15").draggable({revert: "invalid"});

	$("#droppable").droppable({
		classes: {
			"ui-droppable-active": "ui-state-active",
			"ui-droppable-hover": "ui-state-hover"
		},
		drop: function (event, ui) {
			$(this)
					.addClass("ui-state-highlight")
					.find("p")
					.html("Success!");
		}
	});
});

$(function () {
	$("#menu").menu();
});

$(function () {
	$("#datepicker, #datepicker2").datepicker();
});

function theMessage(e) {
	e.preventDefault();

	let departureDate = document.getElementById('datepicker').value;
	let returnDate = document.getElementById('datepicker2').value;
	let destination = document.getElementById('destination').value;

	MESSAGE.innerHTML = '<hr>' + `You are on your way to ${destination}` + '<hr>' + '<br>';
	MESSAGE.innerHTML += `You will depart on ${departureDate}` + '<br>';
	MESSAGE.innerHTML += `and return on ${returnDate}`;
}
