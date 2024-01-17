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

// <-- swiper benefits -->
const swiperBenefits = new Swiper(".benefit__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 30,
  speed: 400,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // breakpoints: {
  //   768: {
  //     slidesPerView: 3,
  //   },
  // },
});

// <-- flip product card -->
const flippedButtonEl = document.querySelector(".flip-button");

flippedButtonEl.addEventListener("click", function () {
  this.closest(".card").classList.toggle("flipped");
});
