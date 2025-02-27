document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    
    if (name && email && interest !== 'Select option') {
        alert(`Thank you, ${name}. We will contact you soon!`);
    } else {
        alert('Please fill out all fields correctly.');
    }
});

const bannerSlide = document.querySelector('.banner-slide');
const images = document.querySelectorAll('.banner-slide img');
let counter = 0;
const slideWidth = images[0].clientWidth;

function slide() {
    bannerSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function nextSlide() {
    counter++;
    if (counter === images.length) {
        counter = 0;
    }
    slide();
}

setInterval(nextSlide, 3000);
