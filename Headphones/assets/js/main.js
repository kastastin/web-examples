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

// <-- add blur header -->
window.addEventListener("scroll", headerHandler);

function headerHandler() {
  const headerEl = document.querySelector("#header");
  this.scrollY >= 50
    ? headerEl.classList.add("blur-header")
    : headerEl.classList.remove("blur-header");
}

/*=============== SWIPER FAVORITES ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
