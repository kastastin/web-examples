// <-- show menu -->
const navMenuEl = document.querySelector("#nav-menu");
const navToggleEl = document.querySelector("#nav-toggle");
const navCloseEl = document.querySelector("#nav-close");

navToggleEl.addEventListener("click", () =>
  navMenuEl.classList.add("show-menu")
);

navCloseEl.addEventListener("click", () =>
  navMenuEl.classList.remove("show-menu")
);

document.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("ri-menu-fill") &&
    !e.target.classList.contains("show-menu")
  )
    navMenuEl.classList.remove("show-menu");
});

// <-- remove menu mobile -->
const navLinksElems = document.querySelectorAll(".nav__link");

navLinksElems.forEach((linkEl) =>
  linkEl.addEventListener("click", linkHandler)
);

function linkHandler() {
  const navMenuEl = document.querySelector("#nav-menu");
  navMenuEl.classList.remove("show-menu");
}

// <-- swiper -->
const swiperWatches = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  speed: 400,

  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      rotate: [0, 0, 15],
      opacity: 0,
    },
    next: {
      translate: [100, 0, -500],
      rotate: [0, 0, -15],
      opacity: 0,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// <-- gsap animation -->
gsap.from(".home__images", 1.5, { opacity: 0, y: 150, delay: 0.1 });
gsap.from(".home__data", 1.8, { opacity: 0, x: -100, delay: 0.8 });
gsap.from(".home__info", 1.8, { opacity: 0, x: 100, delay: 1 });
