const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const solarBtn = document.getElementById('solar');
const body = document.body;

// apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

// check the theme
if (theme) {
	body.classList.add('theme');
	isSolar && body.classList.add('solar');
}
// button event handlers

darkBtn.onclick = () => {
	// body.classList.remove('light');
	// body.classList.add('dark');
	body.classList.replace('light', 'dark');
	// set  item to local
	localStorage.setItem('theme', 'dark');
};
lightBtn.onclick = () => {
	body.classList.replace('dark', 'light');
	localStorage.setItem('theme', 'light');
};
solarBtn.onclick = () => {
	if (body.classList.contains('solar')) {
		body.classList.remove('solar');
		solarBtn.style.cssText = '--bg-solar:var(--yellow);';
		solarBtn.innerText = 'Solarize';
		localStorage.removeItem('isSolar');
	} else {
		solarBtn.style.cssText = '--bg-solar:white';
		body.classList.add('solar');
	}
};
