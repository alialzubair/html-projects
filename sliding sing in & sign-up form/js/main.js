const singUpButton = document.getElementById('singUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// add class right panel
singUpButton.addEventListener("click", () => container.classList.add('right-panel-active'));

//remove the class
signInButton.addEventListener("click", () => container.classList.remove('right-panel-active'));