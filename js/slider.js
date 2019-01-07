let currentSlide = 0;
let first = true;
const playSlider = () => {
    const slides = document.querySelectorAll('.slider__slide');
    slides.forEach((slide, index) => {
        slide.classList.add('slider__slide--hidden');
        if(index===currentSlide && !first) {
            slide.classList.remove('slider__slide--hidden');
        }
    });
    currentSlide++;
    if(currentSlide+1 > slides.length) { currentSlide = 0 }
    first = false;
    setTimeout(playSlider, 3000)
}
//
// document.querySelector('.onload__cover').addEventListener('animationend', playSlider)
playSlider();
