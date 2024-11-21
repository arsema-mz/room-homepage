
const desktopImages = [
    'images/desktop-image-hero-1.jpg',
    'images/desktop-image-hero-2.jpg',
    'images/desktop-image-hero-3.jpg'
];

const mobileImages = [
    'images/mobile-image-hero-1.jpg',
    'images/mobile-image-hero-2.jpg',
    'images/mobile-image-hero-3.jpg'
];

let arrowleft = document.querySelector('.arrowleft');
let arrowright = document.querySelector('.arrowright');
let slides = document.querySelectorAll('.topbox2 .contentSlide');
let topbox1 = document.querySelector('.topbox1');

let currentSlideIndex = 0;
let currentImageIndex = 0;

function isMobile() {
    return window.innerWidth <= 376;
}

function getCurrentImages() {
    return isMobile() ? mobileImages : desktopImages;
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
    const images = getCurrentImages();
    topbox1.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

arrowleft.addEventListener('click', function() {
    currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : slides.length - 1;
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : getCurrentImages().length - 1;
    showSlide(currentSlideIndex);
});

arrowright.addEventListener('click', function() {
    currentSlideIndex = (currentSlideIndex < slides.length - 1) ? currentSlideIndex + 1 : 0;
    currentImageIndex = (currentImageIndex < getCurrentImages().length - 1) ? currentImageIndex + 1 : 0;
    showSlide(currentSlideIndex);
});

showSlide(currentSlideIndex);


const uniqueButton = document.getElementById('unique');
const closeButton = document.getElementById('close');
const nav = document.getElementById('nav');
const backdrop = document.getElementById('backdrop');
const allButton = document.querySelector('.allbutton');

function showNav() {
    nav.classList.add('show');
    closeButton.style.display = 'block';
    backdrop.style.display = 'block';
    allButton.style.display = 'flex';
    document.body.classList.add('blur');
}

function hideNav() {
    nav.classList.remove('show');
    closeButton.style.display = 'none';
    backdrop.style.display = 'none';
    allButton.style.display = 'none';
    document.body.classList.remove('blur');
}

uniqueButton.addEventListener('click', showNav);
closeButton.addEventListener('click', hideNav);

window.addEventListener('resize', () => {
    if (window.innerWidth > 376) {
        hideNav(); // Hide the mobile navigation
        closeButton.style.display = 'none'; // Ensure close button is hidden
        backdrop.style.display = 'none'; // Ensure backdrop is hidden
        allButton.style.display = 'flex'; // Show the links explicitly for larger screens
        nav.classList.remove('show'); // Ensure the navigation is not shown
    } else {
        // Optionally reset mobile elements if needed
        allButton.style.display = 'none'; // Hide all button elements on mobile
    }
});


