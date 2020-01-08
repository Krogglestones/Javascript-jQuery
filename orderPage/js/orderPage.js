
const MESSAGE = document.querySelector('#message');

document.querySelector('#orderForm').addEventListener('submit', calculate);

function calculate(e) {

	e.preventDefault();

	let heaterPrice = parseFloat(document.getElementById('heaterPrice').value, 10) || 0;
	let heaterQuantity = parseInt(document.getElementById('heaterQuantity').value, 10) || 0;
	let heaterSubtotal = heaterPrice * heaterQuantity;

	let shovelPrice = parseFloat(document.getElementById('shovelPrice').value, 10) || 0;
	let shovelQuantity = parseInt(document.getElementById('shovelQuantity').value, 10) || 0;
	let shovelSubtotal = shovelPrice * shovelQuantity;

	let jacketPrice = parseFloat(document.getElementById('jacketPrice').value, 10) || 0;
	let jacketQuantity = parseInt(document.getElementById('jacketQuantity').value, 10) || 0;
	let jacketSubtotal = jacketPrice * jacketQuantity;

	let giftMessage = document.getElementById('giftMessage').value;

	let totalQuantity = heaterQuantity + shovelQuantity + jacketQuantity;

	let tax = parseFloat(document.getElementById('tax').value);
	let taxDecimal = (tax / 100) + 1;

	let subTotal = ((heaterSubtotal + shovelSubtotal + jacketSubtotal) * taxDecimal).toFixed(2);

	if ((tax >= 0) && (tax <= 1)) {
		tax = 0;
	}

	if (tax !== -1) {
		MESSAGE.innerHTML = `Your subtotal before shipping is: $${subTotal}.` + '<br>';
		MESSAGE.innerHTML += `Total items ordered: ${totalQuantity}` + '<br>';
		MESSAGE.innerHTML += `Sales tax was: ${tax}%` + '<br>';
		MESSAGE.innerHTML += `GIFT MESSAGE: ${giftMessage}` + '<br>';
	} else {
		alert("Must choose a state for sales tax.")
	}

}
