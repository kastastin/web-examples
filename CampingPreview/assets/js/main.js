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
    !e.target.classList.contains("ri-menu-line") &&
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

// <-- add header background -->
window.addEventListener("scroll", headerHandler);

function headerHandler() {
  const headerEl = document.querySelector("#header");
  this.scrollY >= 50
    ? headerEl.classList.add("bg-header")
    : headerEl.classList.remove("bg-header");
}

// <-- gsap animation -->
gsap.from(".home__img-2", 1.2, { opacity: 0, y: 200, delay: 0.1 });
gsap.from(".home__img-3", 1.2, { opacity: 0, y: 200, delay: 0.5 });
gsap.from(".home__data", 1.2, { opacity: 0, y: -60, delay: 1 });
gsap.from(".home__bird-1", 1.2, { opacity: 0, x: -80, delay: 1.1 });
gsap.from(".home__bird-2", 1.2, { opacity: 0, x: 80, delay: 1.2 });
gsap.from(".home__img-1", 1.2, { opacity: 0, y: 200, delay: 1.2 });
gsap.from(".home__img-4", 1.2, { opacity: 0, x: 200, delay: 1.3 });
