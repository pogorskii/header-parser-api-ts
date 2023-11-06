var allProductCards = document.querySelectorAll(".product-card");

allProductCards.forEach((element) => {
  const previous = element.querySelector(".product-card__previous-image");
  const next = element.querySelector(".product-card__next-image");
  const images = element.querySelector(".product__gallery-slider").children;
  const totalImages = images.length;
  let currentIndex = 0;

  // Event Listeners to previous and next buttons
  previous.addEventListener("click", () => {
    previousImage();
  });

  next.addEventListener("click", () => {
    nextImage();
  });

  // Function to go to next Image
  function nextImage() {
    images[currentIndex].classList.remove("product__image--shown");
    if (currentIndex == totalImages - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    images[currentIndex].classList.add("product__image--shown");
  }

  // Function to go to previous Image
  function previousImage() {
    images[currentIndex].classList.remove("product__image--shown");
    if (currentIndex == 0) {
      currentIndex = totalImages - 1;
    } else {
      currentIndex--;
    }

    images[currentIndex].classList.add("product__image--shown");
  }
});

// Галерея товара

var currentIndex = 2;

//Show current image
showSlides(currentIndex);

//Function to move Next
function plusSlides(n) {
  showSlides((currentIndex += n));
}

//Function to move back
function currentSlide(n) {
  showSlides((currentIndex = n));
}

//Initiate moving of slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName(
    "product-gallery__featured-photo"
  );
  var dots = document.getElementsByClassName("product-selector__photo");
  if (n > slides.length) {
    currentIndex = 1;
  }
  if (n < 1) {
    currentIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(
      " product-selector__photo--selected",
      ""
    );
  }
  slides[currentIndex - 1].style.display = "block";
  dots[currentIndex - 1].className += " product-selector__photo--selected";
}

// Карточка преимуществ товара

const firstFeature = document.querySelector(".model-feature--1");

firstFeature.addEventListener("click", () => {
  const popup = document.querySelector(".feature-popup");
  popup.classList.add("feature-popup--shown");
});

const secondFeature = document.querySelector(".model-feature--2");

secondFeature.addEventListener("click", () => {
  const popup = document.querySelector(".feature-popup");
  popup.classList.add("feature-popup--shown");
});

const thirdFeature = document.querySelector(".model-feature--3");

thirdFeature.addEventListener("click", () => {
  const popup = document.querySelector(".feature-popup");
  popup.classList.add("feature-popup--shown");
});

const popupCloseBtn = document.querySelector(".feature-popup__close-button");

popupCloseBtn.addEventListener("click", () => {
  const popup = document.querySelector(".feature-popup");
  popup.classList.remove("feature-popup--shown");
});
