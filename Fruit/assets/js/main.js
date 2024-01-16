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
    !e.target.classList.contains("ri-apps-2-line") &&
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

// <-- add shadow header -->
window.addEventListener("scroll", headerHandler);

function headerHandler() {
  const headerEl = document.querySelector("#header");
  this.scrollY >= 50
    ? headerEl.classList.add("shadow-header")
    : headerEl.classList.remove("shadow-header");
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

// <-- dark/light theme -->
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// validate if the user previously chose a topic
if (selectedTheme) {
  // if validation is fulfilled, ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// activate/deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // add/remove the dark/icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// <-- send form to telegram -->
const form = document.querySelector(".join__form");
const userEmail = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const chatId = "342013084";
  const botToken = "6618612381:AAHhdDR51mVS-NV3Jmhgn1UlW3nGp32mJVw";
  const text = `Travel Form:%0A%0AEmail: ${userEmail.value}`;

  fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`
  )
    .then((response) => response.json())
    .then((data) => {
      alert(
        data.ok ? "Your email was successfully sent" : "Something went wrong("
      );
      form.reset();
    });
});

// <-- scroll reveal animations -->
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1250,
  delay: 400,
  // reset: true, // repeat animation
});

sr.reveal(`.home__data, .join__container`);
sr.reveal(`.home__img`, { origin: "bottom" });
sr.reveal(`.enjoy__card, .popular__card`, { interval: 200 });
sr.reveal(`.about__data`, { origin: "right" });
sr.reveal(`.about__img`, { origin: "left" });
