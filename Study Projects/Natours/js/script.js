// NAVIGATION MENU FUNCTIONALITY
const btnNavEl = document.querySelector(".navigation__button");
const navEl = document.querySelector(".navigation");
const navIconEl = document.querySelector(".navigation__icon");

// Shows menu on menu button click
btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("navigation--active");
  navEl.classList.toggle("hover");
});

// Nav menu buttons close nav menu on click
var navLinkElArr = document.querySelectorAll(".navigation__link");

navLinkElArr.forEach((element) => {
  element.addEventListener("click", function () {
    navEl.classList.toggle("navigation--active");
    navEl.classList.toggle("hover");
  });
});

// POPUP FUNCTIONALITY
var popupEl = document.querySelector(".popup");
var popupContEl = document.querySelector(".popup__content");
var popupButtonElArr = document.querySelectorAll(".popup__button");

// Makes link to popup act like buttons
popupButtonElArr.forEach((element) => {
  element.addEventListener("click", function () {
    popupEl.classList.toggle("popup--active");
  });
});

// Click outside popup content closes popup
popupEl.addEventListener("click", function (event) {
  if (!popupContEl.contains(event.target)) {
    popupEl.classList.toggle("popup--active");
  }
});
