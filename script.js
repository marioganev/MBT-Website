const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;
let nextIndex = 1;

function swipeImages() {
  const currentImage = images[currentIndex];
  const nextImage = images[nextIndex];

  currentImage.style.transform = 'translateX(-100%)';
  nextImage.style.transform = 'translateX(0)';

  currentIndex = (currentIndex + 1) % images.length;
  nextIndex = (nextIndex + 1) % images.length;
}

setInterval(swipeImages, 3000); // Change image every 3 seconds (adjust as needed)