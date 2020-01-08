
document.addEventListener('click', lightboxClick);

function lightboxClick(e) {
	let elem = event.target,
			elemID = elem.getAttribute('id'),
			lightboxImg = document.getElementById('lightbox-image'),
			lightbox = document.getElementById('lightbox-overlay'),
			newImg = new Image();

	if (elem.hasAttribute('data-lightbox')) {
		e.preventDefault();

		newImg.onload = function () {
			lightboxImg.src = this.src;
		}

		lightboxImg.src = '';
		newImg.src = elem.getAttribute('data-lightbox');
		lightbox.classList.add('visible');

	}

	if (elemID === 'lightbox-image' || elemID === 'lightbox-overlay') {
		e.preventDefault();

		lightbox.classList.remove('visible');
	}

}