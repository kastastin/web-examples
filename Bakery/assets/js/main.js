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

// <-- add blur header -->
window.addEventListener("scroll", headerHandler);

function headerHandler() {
  const headerEl = document.querySelector("#header");
  this.scrollY >= 50
    ? headerEl.classList.add("blur-header")
    : headerEl.classList.remove("blur-header");
}

// <-- show scroll up tooltip -->
window.addEventListener("scroll", scrollUpHandler);

function scrollUpHandler() {
  const scrollUpEl = document.querySelector("#scroll-up");
  this.scrollY >= 350
    ? scrollUpEl.classList.add("show-scrollup")
    : scrollUpEl.classList.remove("show-scrollup");
}

// <-- scroll sections active links -->
const sectionsElems = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  const scrollDown = window.scrollY;

  sectionsElems.forEach((sectionEl) => {
    const sectionHeight = sectionEl.offsetHeight;
    const sectionTop = sectionEl.offsetTop - 58;
    const sectionId = sectionEl.getAttribute("id");
    const sectionClass = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`
    );

    scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight
      ? sectionClass.classList.add("active-link")
      : sectionClass.classList.remove("active-link");
  });
}

// <-- smooth scrolling -->
const links = document.querySelectorAll(".nav__menu a");

links.forEach((linkEl) => {
  linkEl.onclick = function (e) {
    e.preventDefault();

    const href = linkEl.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  };
});

// <-- scroll reveal animations -->
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
  // reset: true, // repeat animation
});

sr.reveal(`.home__data, .about__img, .about__data, .visit__data`);

sr.reveal(`.home__image, .footer__img-1, .footer__img-2`, {
  rotate: { z: -15 },
});
sr.reveal(`.home__bread, .about__bread`, { rotate: { z: 15 } });
sr.reveal(`.home__footer`, { scale: 1, origin: "bottom" });

sr.reveal(`.new__card:nth-child(1) img`, { rotate: { z: -30 }, distance: 0 });
sr.reveal(`.new__card:nth-child(2) img`, {
  rotate: { z: 15 },
  distance: 0,
  delay: 600,
});
sr.reveal(`.new__card:nth-child(3) img`, {
  rotate: { z: -30 },
  distance: 0,
  delay: 900,
});

sr.reveal(`.favorite__card img`, {
  interval: 100,
  rotate: { z: 15 },
  distance: 0,
});

sr.reveal(`.footer__container`, { scale: 1 });
