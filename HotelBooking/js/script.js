// <-- Menu open/close -->
const navbarEl = document.querySelector(".header .navbar");
const menuBtnEl = document.querySelector("#menu-btn");

menuBtnEl.addEventListener("click", () => navbarEl.classList.toggle("active"));
document.addEventListener("scroll", () => navbarEl.classList.remove("active"));

// <-- Swiper home -->
const swiperHome = new Swiper(".home-slider", {
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

// <-- Swiper gallery -->
const swiperGallery = new Swiper(".gallery-slider", {
  loop: true,
  effect: "coverflow",
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  speed: 800,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
