let slideIndex = 1;
showSlides(slideIndex);

// Function to move to the next slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to move to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display the current slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Automatic slideshow function
function autoSlide() {
  plusSlides(1); // Move to the next slide
}

// Set the interval for automatic slideshow (e.g., every 3 seconds)
setInterval(autoSlide, 3000);

function toggleMenu() {
	const headerRight = document.querySelector('.header-right');
	headerRight.classList.toggle('active');
}