////////////////////////////
// CARDS SLIDER ANIMATION

const cardType2El = document.querySelectorAll(".card-type2");
const cardType4El = document.querySelectorAll(".card-type4");

function myFunction(x) {
  if (x.matches) {
    cardType2El.forEach((element) => {
      const cardTextEl = element.getElementsByClassName(".card-type2__text");
      let height = cardTextEl.offsetHeight;
      setTimeout(() => {
        cardTextEl.style.height = 0;
        element.addEventListener("mouseenter", function () {
          cardTextEl.style.height = height + "px";
        });
        element.addEventListener("mouseout", function () {
          cardTextEl.style.height = 0;
        });
      }, 500);
    });

    cardType4El.forEach((element) => {
      var cardTextEl = element.querySelector(".card-type4__text");
      let height = cardTextEl.offsetHeight;
      setTimeout(() => {
        cardTextEl.style.height = 0;
        element.addEventListener("mouseenter", function () {
          cardTextEl.style.height = height + "px";
        });
        element.addEventListener("mouseout", function () {
          cardTextEl.style.height = 0;
        });
      }, 500);
    });
  }
}

var x = window.matchMedia("(min-width: 84rem)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

///////////////////////////
// SEARCHBOX

const btnSearchEl = document.querySelector(".search-box");
const headerEl = document.querySelector(".header");

btnSearchEl.addEventListener("click", function () {
  document.body.classList.toggle("search-open");
});

////////////////////////////////////////////
// Interactive Header and Subheader

function myFunction2(mobile, element) {
  if (mobile.matches) {
    window.onscroll = function (e) {
      if (window.scrollY > 80) {
        if (this.oldScroll > this.scrollY) {
          document.body.classList.add("show-sub-header");
          document.body.classList.remove("hide-sub-header");
        } else {
          document.body.classList.remove("show-sub-header");
          document.body.classList.add("hide-sub-header");
        }
        this.oldScroll = this.scrollY;
      } else {
        document.body.classList.add("show-sub-header");
      }
    };
  } else {
    document.body.classList.remove("show-sub-header");
    document.body.classList.add("hide-sub-header");
    window.onscroll = function (e) {
      document.body.classList.remove("show-sub-header");
      document.body.classList.add("hide-sub-header");
      console.log("hello");
      if (window.scrollY > 80) {
        if (this.oldScroll > this.scrollY) {
          document.body.classList.add("show-header");
          document.body.classList.remove("hide-header");
        } else {
          document.body.classList.remove("show-header");
          document.body.classList.add("hide-header");
        }
        this.oldScroll = this.scrollY;
      } else {
        document.body.classList.add("show-header");
      }
    };
  }
}

var mobile = window.matchMedia("(min-width: 70rem)");
myFunction2(mobile); // Call listener function at run time
mobile.addListener(myFunction2); // Attach listener function on state changes

////////////////////////////////////////////
// MOBILE SIDEBAR

const btnNavEl = document.querySelector(".menu-icon");
const overlayEl = document.querySelector(".overlay");
const mobileNavEl = document.querySelector(".sidebar-mobile");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  overlayEl.classList.toggle("overlay_active");
});

const btnCloseNavEl = document.querySelector(".sidebar-mobile__close");

btnCloseNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  overlayEl.classList.toggle("overlay_active");
});

overlayEl.addEventListener("click", function (event) {
  if (!mobileNavEl.contains(event.target)) {
    headerEl.classList.toggle("nav-open");
    overlayEl.classList.toggle("overlay_active");
  }
});

////////////////////////////////////////////
// MORE LIST (MOBILE)

const btnMoreEl = document.querySelector(".mobile-more-button");
const dropdownEl = document.querySelector(".mobile-more-list");
const moreIconEl = document.querySelector(".more-icon");

btnMoreEl.addEventListener("click", function () {
  if (dropdownEl.style.display === "block") {
    dropdownEl.style.display = "none";
    moreIconEl.style.transform = "rotate(0deg)";
  } else {
    dropdownEl.style.display = "block";
    moreIconEl.style.transform = "rotate(180deg)";
  }
});
