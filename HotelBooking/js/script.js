// <-- Menu open/close -->
const navbarEl = document.querySelector(".header .navbar");
const menuBtnEl = document.querySelector("#menu-btn");

menuBtnEl.addEventListener("click", () => navbarEl.classList.toggle("active"));
document.addEventListener("scroll", () => navbarEl.classList.remove("active"));

// <-- Swiper home -->
const swiper = new Swiper(".home-slider", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  speed: 800,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
