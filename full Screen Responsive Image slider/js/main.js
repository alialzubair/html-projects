const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

//next function
const nextSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // ckeck for next slide
    if (current.nextElementSibling) {
        //add current to next sibling
        current.nextElementSibling.classList.add('current');

    } else {
        //add current  to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
//prev function
const prevtSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // ckeck for previouse slide
    if (current.previousElementSibling) {
        //add current to previoues sibling
        current.previousElementSibling.classList.add('current');

    } else {
        //add current  to start
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

//buttn events
next.addEventListener('click', e => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval=setInterval(nextSlide,intervalTime);
    }
});
prev.addEventListener('click', e => {
    prevtSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval=setInterval(nextSlide,intervalTime);
    }
});
//auto slide
if(auto){
    //run next slide at intrval time
    slideInterval=setInterval(nextSlide,intervalTime);
}