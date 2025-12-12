const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const dots = document.querySelectorAll('.dot');

let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

document.querySelector('.left').onclick = () => {
    index = (index === 0) ? slides.length - 1 : index - 1;
    updateCarousel();
};

document.querySelector('.right').onclick = () => {
    index = (index + 1) % slides.length;
    updateCarousel();
};
