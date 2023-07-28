const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const numImages = images.length;
let currentImage = 0;
const screenWidth = window.innerWidth;

function moveCarousel() {
  if (screenWidth < 800) {
    carousel.style.transform = `translateX(-${currentImage * 100}%)`;
  } else {
    carousel.style.transform = `translateX(0)`;
  }
  currentImage = (currentImage + 1) % numImages;
}

// Automatic sliding every 3 seconds
setInterval(moveCarousel, 3000);