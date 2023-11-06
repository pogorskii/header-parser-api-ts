// EVENTS CAROUSEL
var multipleCardCarousel = document.querySelector("#carouselExampleControls");
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
    wrap: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width() / 2;
  console.log(cardWidth);
  var scrollPosition = cardWidth * 0.5;

  $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);

  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    scrollPosition += cardWidth * 2;
    $("#carouselExampleControls .carousel-inner").animate(
      { scrollLeft: scrollPosition },
      600
    );
    $("#carouselExampleControls .carousel-control-prev").fadeIn();
    if (scrollPosition >= cardWidth * 9) {
      $("#carouselExampleControls .carousel-control-next").fadeOut();
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    scrollPosition -= cardWidth * 2;
    $("#carouselExampleControls .carousel-inner").animate(
      { scrollLeft: scrollPosition },
      600
    );
    $("#carouselExampleControls .carousel-control-next").fadeIn();
    if (scrollPosition < 0) {
      $("#carouselExampleControls .carousel-control-prev").fadeOut();
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}

// TOGGLE PASSWORD VISIBILITY

const togglePassword = document.querySelector("#togglePassword");

const password = document.querySelector("#password");

togglePassword.addEventListener("click", () => {
  // Toggle the type attribute using
  // getAttribure() method
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", type);

  // Toggle the eye and bi-eye icon
  this.classList.toggle("bi-eye");
});

const togglePassword2 = document.querySelector("#togglePassword2");

const password2 = document.querySelector("#password-signup");

togglePassword2.addEventListener("click", () => {
  // Toggle the type attribute using
  // getAttribure() method
  const type =
    password2.getAttribute("type") === "password" ? "text" : "password";

  password2.setAttribute("type", type);

  // Toggle the eye and bi-eye icon
  this.classList.toggle("bi-eye");
});

const togglePassword3 = document.querySelector("#togglePassword3");

const password3 = document.querySelector("#passwordRepeat-signup");

togglePassword3.addEventListener("click", () => {
  // Toggle the type attribute using
  // getAttribure() method
  const type =
    password3.getAttribute("type") === "password" ? "text" : "password";

  password3.setAttribute("type", type);

  // Toggle the eye and bi-eye icon
  this.classList.toggle("bi-eye");
});
