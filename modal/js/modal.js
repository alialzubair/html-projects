// get the modal element

const modal = document.getElementById('simpaleModal');

//  get open modal button
const modalBtn = document.getElementById('modal-btn');

// get close btn

const closeBtn = document.querySelector('.close-btn');

// add eventlistrent form click
modalBtn.addEventListener('click', () => (modal.style.display = 'block'));
// close the modal
closeBtn.addEventListener('click', () => (modal.style.display = 'none'));

// add listener for outside click
window.addEventListener('click', (e) => {
	// check if target modal
	if (e.target == modal) {
		modal.style.display = 'none';
	}
});
