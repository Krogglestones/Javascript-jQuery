//  Create message's container

	const MESSAGE = document.querySelector('#message');

//  2.  Query for the element to attach event listener

//addEventListener takes 2 args... (stringEventListeningFor, functionToRun)

	document.querySelector('#gradeCalculator').addEventListener('submit', calculate);

//   The function

  function calculate(e) {

  	e.preventDefault();

  	let pointsScored = document.querySelector('#pointsScored').value;
  	let pointsPossible = document.querySelector('#pointsPossible').value;

  	let score = (pointsScored / pointsPossible) * 100;
  	let letter;

  	score = Math.round(score);

		if (score >= 90) {
			letter = 'A';
		} else if ((score < 90) && (score >= 80)) {
			letter = 'B';
		} else if ((score < 80) && (score >= 70)) {
			letter = 'C';
		} else if ((score < 70) && (score >= 60)) {
			letter = 'D';
		} else {
			letter = 'F';
		}

		MESSAGE.innerHTML = `You scored ${score}% for a grade of ${letter}.`;

		document.querySelector('#gradeCalculator').reset();

	}
