// Get DOM elements
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const carousel = document.querySelector('.carousel');
const slider = carousel.querySelector('.list');
const thumbnails = carousel.querySelector('.thumbnail');
const timeBar = carousel.querySelector('.time');

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', () => showSlide('next'));
prevBtn.addEventListener('click', () => showSlide('prev'));

// Automatic slide change interval (7 seconds)
let autoSlideInterval = setInterval(() => {
    showSlide('next');
}, 7000);

// Function to handle slide transitions
function showSlide(direction) {
    const slides = slider.querySelectorAll('.item');
    const thumbnailsItems = thumbnails.querySelectorAll('.item');

    if (direction === 'next') {
        slider.appendChild(slides[0]); // Move the first slide to the end
        thumbnails.appendChild(thumbnailsItems[0]); // Move the first thumbnail to the end
        carousel.classList.add('next'); // Apply animation class
    } else if (direction === 'prev') {
        slider.prepend(slides[slides.length - 1]); // Move the last slide to the beginning
        thumbnails.prepend(thumbnailsItems[thumbnailsItems.length - 1]); // Move the last thumbnail to the beginning
        carousel.classList.add('prev'); // Apply animation class
    }

    // Remove animation class after animation completes
    setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, 500);

    // Reset auto slide interval
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        showSlide('next');
    }, 7000);
}
